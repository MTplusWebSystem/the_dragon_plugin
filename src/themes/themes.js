// eslint-disable-next-line no-undef
const themes = acode.require('themes');
// eslint-disable-next-line no-undef
const ThemeBuilder = acode.require('themeBuilder');

export function Dragon(name) {
	const the_dragon = new ThemeBuilder(name, 'dark', 'free');

	the_dragon.primaryColor = '#273748';
	the_dragon.popupBackgroundColor = '#273748';
	the_dragon.darkenedPrimaryColor = '#273748';
	the_dragon.primaryTextColor = '#DBD5DE';
	the_dragon.secondaryColor = '#273748';
	the_dragon.secondaryTextColor = '#DBD5DE';
	the_dragon.activeColor = '#304391';
	the_dragon.activeIconColor = '#F90167';
	
	the_dragon.linkTextColor = '#9313f6';
	the_dragon.errorTextColor = '#f97583';
	the_dragon.scrollbarColor = '#30363d';
	the_dragon.borderColor = '#30363d';
	the_dragon.popupBorderColor = '#30363d';
	the_dragon.borderRadius = '4px';
	the_dragon.popupBorderRadius = '4px';
	the_dragon.popupIconColor = '#DBD5DE';
	the_dragon.popupTextColor = '#DBD5DE';
	the_dragon.popupActiveColor = '#F90167';
	the_dragon.boxShadowColor = '#00000033';
	the_dragon.buttonActiveColor = '#9313f6';
	the_dragon.buttonBackgroundColor = '#9313f6';
	the_dragon.buttonTextColor = '#DBD5DE';
	themes.add(the_dragon);
	themes.apply(name);
};

