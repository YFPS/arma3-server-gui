import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "/mods/presets";

export function getPresets() {
    return http.get(apiEndpoint);
}

export function createPreset(body) {
    return http.post(apiEndpoint, body);
}

export function deletePreset(name) {
    return http.delete(apiEndpoint + "/" + name);
}