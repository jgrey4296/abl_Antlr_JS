YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "JGListener",
        "Parser",
        "UnitTests.ABLVariableDeclarationTests",
        "UnitTests.TEMPLATE",
        "UnitTests.WMERegistrationTests",
        "UnitTests.ablExpressionTests",
        "UnitTests.ablLiteralTests",
        "UnitTests.actionRegistrationTests",
        "UnitTests.conflictDeclarationTests",
        "UnitTests.constantDeclarationTests",
        "UnitTests.importDeclarationTests",
        "UnitTests.packageImportTests",
        "UnitTests.paramsTests",
        "UnitTests.preconditionTests",
        "UnitTests.propertyDeclarationTests",
        "UnitTests.teamNeededForSuccessTests",
        "UnitTests.testExpressionTests",
        "UnitTests.throwErrorTests",
        "UnitTests.wmeDeclarationTests",
        "UnitTests.wmeFieldTestTests",
        "UnitTests.wmeTestSequenceTests",
        "UnitTests.wmeTestTest",
        "nodeMain"
    ],
    "modules": [
        "ABLModule",
        "ABLParser",
        "UnitTests",
        "example"
    ],
    "allModules": [
        {
            "displayName": "ABLModule",
            "name": "ABLModule"
        },
        {
            "displayName": "ABLParser",
            "name": "ABLParser"
        },
        {
            "displayName": "example",
            "name": "example",
            "description": "An example Node based use of the ABLParser"
        },
        {
            "displayName": "UnitTests",
            "name": "UnitTests",
            "description": "Tests relating to the Variable Declarations,\nSuch as \"String Test;\""
        }
    ]
} };
});