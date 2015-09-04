
exports.initialTests = require('./unitTests');
exports.packageTests = require('./packageTest');
exports.importTests = require('./importDeclarationTests');
exports.teamNeededTests = require('./TeamNeededTests');
exports.conflictDeclarationTests = require('./conflictDeclarationTests');
exports.wmeRegistrationTests = require('./WMERegistrationTests');
exports.ablLiteralTests = require('./AblLiteralTests');
exports.ablExpressionTests = require('./AblExpressionTests');
exports.paramTests = require('./paramTest');
exports.paramsTests = require('./paramsTest');
exports.actionRegistration = require("./actionRegistrationTests");

exports.ablVariableDeclarationTests =
    require('./ABLVariableDeclarationTests');

exports.wmeDeclarationTests = require('./WMEDeclarationTests');
exports.propertyDeclarationTests = require('./PropertyDeclarationTests');

exports.operatorTests = require('./operatorTests');
exports.wmeFieldTestTests = require('./WmeFieldTestTests');
exports.wmeTestTests = require('./WMETestTest');
exports.binaryOpTests = require('./binaryOpTests');
exports.javaMethodTests = require('./javaMethodTests');
exports.clauseTests = require('./clauseTests');
exports.mixedCallTests = require('./mixedCallTests');
exports.conditionalExpressionTests = require('./conditionalExpressionTests');

exports.wmeTestSequenceTests = require('./wmeTestSequenceTests');
exports.preconditionTests = require('./preconditionTests');
exports.contextConditionTests = require('./contextConditionTests');
exports.entryConditionTests = require('./entryConditionTests');
exports.successConditionTests = require('./successConditionTests');
exports.successTestTests = require('./successTestTests');
exports.numberNeededForSuccessTests = require('./numberNeededForSuccessTests');
exports.teamMemberSpecifierTests = require('./teamMemberSpecifierTests');
exports.priorityModifierTests = require('./priorityModifierTests');

exports.persistenceTests = require('./persistenceTests');
exports.namedPropertyTests = require('./namedPropertyTests');
exports.stepModifierTests = require('./stepModifierTests');

exports.basicStepTests = require('./basicStepTests');
exports.primitiveActTests = require('./primitiveActTests');
exports.goalStepTests = require('./goalStepTests');

