package eis.ablsl.agents;

import eis.ablsl.*;
import java.net.InetAddress;
import us.ca.la.anm.util.io.JTextAreaLog;
import java.io.IOException;
import abl.runtime.BehavingEntity;
import java.lang.Class;
import java.lang.reflect.*;
import eis.ablsl.agents.*;
import debug.*;




public class HolodeckAvatarLauncher {


    static private class AvatarThread extends Thread
	{
     
		String roleName;
		String avatarName;
		String hostName;
		int serverport;

		AvatarThread(String roleName, String avatarName, String hostname, int port) 
		{
			this.avatarName = avatarName;
			this.roleName = roleName;
			this.hostName = hostname;
			this.serverport = port;
			
		}

        public void run()
		{
		
			Class avatarClass = null;
			BehavingEntity newAvatar = null;
		
			try 
			{

				avatarClass = Class.forName(roleName);
				//newAvatar = avatarClass.getConstructor(new Class[0]).newInstance();
				newAvatar = (BehavingEntity)avatarClass.newInstance();

			} catch (Exception e)
			{
				System.out.println("Error Creating " + roleName + " Avatar '" + avatarName + "':" + e);
				System.exit(1);
			}
			
			try 
			{
        
				//Create gameclient network communicator
				GameClient client = new GameClient(hostName, serverport);
	
				//Create proxybot
				Bot newHolodeckProxyBot = new Bot();
				newHolodeckProxyBot.init(avatarName, client);
				
				client.connect();

				//Our sensors sense instantaneously, so they don't need to be run
				//in their own thread:
				newAvatar.setUseSynchrousSensors();
				
				//Enable ABL behavior tree visualizer
				//newAvatar.addBehavingListener(new debug.ABTViewer());	
				newAvatar.startBehaving();

			} catch (Exception e) { 
				System.out.println("Error in " + roleName + " Avatar '" + avatarName + "':" + e); 
				e.printStackTrace();
				System.exit(1);
				
			}
		}
		
    }

    public static void main(String[] args) {
		if(args.length < 4)
		{
			System.out.println("Parameters: [server hostname] [server port] [role name 1 ] [avatar name 1] { [role name 2] [avatar name 2] } ... ");
		}
		int requestedServerPort = 0;
		
		if(args.length % 2 != 0)
		{		
			System.out.println("Error: Must provide a username and password for each avatar");
			System.exit(1);
		}
		
		
		try
		{
			requestedServerPort = Integer.parseInt(args[1]);
		}
		catch (Exception e)
		{
			System.out.println("Error with given port number: " + e);
			System.exit(1);
		}
		
		for (int i = 2; i < args.length; i+=2)
		{
		
			
			AvatarThread avThread = new AvatarThread("eis.ablsl.agents." + args[i], args[i+1], args[0], requestedServerPort);
			avThread.start(); 
			
		}
		
	}
}
