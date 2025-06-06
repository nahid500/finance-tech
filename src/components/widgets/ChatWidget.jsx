import Script from 'next/script';

const ChatWidget = () => (
  <Script
    id="anychat-widget"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `(function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://api.anychat.one/widget/232a62e9-8a59-3e02-8dd3-f459c723eee9?r=' + encodeURIComponent(window.location);
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'contactus-jssdk'));`,
    }}
  />
);

export default ChatWidget;
