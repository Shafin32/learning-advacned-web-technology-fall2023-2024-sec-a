import Script from "next/script";

export const BotPress = () =>{
return(
<div>
<Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"/>
<Script src="https://mediafiles.botpress.cloud/deb5aeee-51ab-435b-a1f0-4310d5c760f2/webchat/config.js" defer/>
</div>
);

}
