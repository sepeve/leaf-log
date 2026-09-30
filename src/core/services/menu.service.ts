import type { Settings } from '../model';
import settingsData from "../../data/settings.json";

export function getSettings(): Settings {
    return settingsData;
}