import plugin from '../plugin.json';
import * as setup from './themes/themes.js';

class theme {
  
	async init() {
	  
	 setup.Dragon('the Dragon ');
	};

	async destroy() {};
	
};

// eslint-disable-next-line no-undef
if (window.acode) {
	// eslint-disable-next-line no-undef
	acode.setPluginInit(plugin.id, async (url) => {
		if (!url.endsWith('/')) return (url += '/');
		
		new theme().url = url;
		new theme().init();
		
	});

	// eslint-disable-next-line no-undef
	acode.setPluginUnmount(plugin.id, () => new theme().destroy());
	
};