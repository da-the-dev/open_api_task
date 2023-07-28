import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue: VKCredentials = {
    access_token: "",
    expires_in: -1,
    user_id: -1
};

const initialValue = browser ? window.localStorage.getItem('vk') ? JSON.parse(window.localStorage.getItem('vk')!) : defaultValue : defaultValue;
 
const vk = writable<VKCredentials>(initialValue);
 
vk.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('vk', JSON.stringify(value));
  }
});
 
export default vk;