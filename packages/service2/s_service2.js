
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'pearldotlink',
  applicationName: 'jetpack-test',
  appUid: 'N5K3Qk6xhM3KSDHKDw',
  orgUid: 'b16eadf0-554f-4414-a62d-9de12f223112',
  deploymentUid: 'e198acc5-8adf-4a6b-8af5-a69a2a47eaf5',
  serviceName: 'test',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '5.4.2',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'test-dev-service2', timeout: 30 };

try {
  const userHandler = require('./dist/index.js');
  module.exports.handler = serverlessSDK.handler(userHandler.service2, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}