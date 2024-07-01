import { FullConfig } from "@playwright/test";
import baseEnvUrl from '../URLs/environmentBaseUrl';
import stagingData from '../../test-data/staging-users';
//========================Getters====================
function getBaseURL(config: FullConfig) {
    const { baseURL } = config.projects[0].use;
    return baseURL;
}

function getEnvURL() {
    const env = process.env.ENV!;
    if (env == 'staging') {
        return baseEnvUrl.staging.uiBaseURL;}
    else{
        return baseEnvUrl.prod.uiBaseURL;
    }
}

function getTestData() {
    const env = process.env.ENV!;
    if (env == 'staging') {
        return stagingData;
    }
    else{
        return stagingData;
    }
}

export default {getBaseURL, getEnvURL, getTestData};