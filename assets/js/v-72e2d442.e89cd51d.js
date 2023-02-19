"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37683],{547187:(e,n,a)=>{a.r(n),a.d(n,{data:()=>i});const i=JSON.parse('{"key":"v-72e2d442","path":"/guide/configuration/frontend.html","title":"Frontend","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"excerpt":"","headers":[{"level":2,"title":"Advanced configuration","slug":"advanced-configuration","link":"#advanced-configuration","children":[]},{"level":2,"title":"Nginx proxy configuration","slug":"nginx-proxy-configuration","link":"#nginx-proxy-configuration","children":[]}],"git":{"updatedTime":1676798268000},"filePathRelative":"guide/configuration/frontend.md"}')},593784:(e,n,a)=>{a.r(n),a.d(n,{default:()=>b});var i=a(166252);const s=a.p+"assets/img/frontend.e604ec0e.png",t=(0,i._)("h1",{id:"frontend",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#frontend","aria-hidden":"true"},"#"),(0,i.Uk)(" Frontend")],-1),o={class:"custom-container tip"},r=(0,i._)("p",{class:"custom-container-title"},"TIP",-1),l={href:"https://github.com/Koenkk/zigbee2mqtt/issues/4266",target:"_blank",rel:"noopener noreferrer"},d=(0,i.uE)('<p>Zigbee2MQTT has a built-in webbased frontend.</p><p><img src="'+s+'" alt="Frontend"></p><p>To enable the frontend add the following to your <code>configuration.yaml</code>. This will start the frontend on port <code>8080</code>.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">frontend</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration" aria-hidden="true">#</a> Advanced configuration</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">frontend</span><span class="token punctuation">:</span>\n  <span class="token comment"># Optional, default 8080</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>\n  <span class="token comment"># Optional, default 0.0.0.0</span>\n  <span class="token key atrule">host</span><span class="token punctuation">:</span> 0.0.0.0\n  <span class="token comment"># Optional, enables authentication, disabled by default</span>\n  <span class="token key atrule">auth_token</span><span class="token punctuation">:</span> your<span class="token punctuation">-</span>secret<span class="token punctuation">-</span>token\n  <span class="token comment"># Optional, url on which the frontend can be reached, currently only used for the Home Assistant device configuration page</span>\n  <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;https://zigbee2mqtt.myhouse.org&#39;</span>\n  <span class="token comment"># Optional, certificate file path for exposing HTTPS. The sibling property &#39;ssl_key&#39; must be set for HTTPS to be activated</span>\n  <span class="token key atrule">ssl_cert</span><span class="token punctuation">:</span> /config/etc/letsencrypt/live/mydomain.com/fullchain.pem\n  <span class="token comment"># Optional, private key file path for exposing HTTPS. The sibling property &#39;ssl_cert&#39; must be set for HTTPS to be activated</span>\n  <span class="token key atrule">ssl_key</span><span class="token punctuation">:</span> /config/etc/letsencrypt/live/mydomain.com/privkey.pem\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To specify the <code>auth_token</code> in a different file set e.g. <code>auth_token: &#39;!secret.yaml auth_token&#39;</code>, create a file called <code>secret.yaml</code> next to <code>configuration.yaml</code> with content <code>auth_token: super-secret-token</code>.</p><p><strong>NOTE:</strong> If you are running Zigbee2MQTT via the Home Assistant addon you cannot change the port. The addon will force the frontend to run on port 8099 as Home Assistant Ingress requires this.</p><h2 id="nginx-proxy-configuration" tabindex="-1"><a class="header-anchor" href="#nginx-proxy-configuration" aria-hidden="true">#</a> Nginx proxy configuration</h2><p>In case you want to run the frontend behind a proxy you can use the following config as an example.</p>',10),c={href:"https://bugs.webkit.org/show_bug.cgi?id=80362",target:"_blank",rel:"noopener noreferrer"},u=(0,i._)("em",null,"all",-1),p=(0,i._)("code",null,"auth_token",-1),v=(0,i._)("code",null,"auth_basic",-1),m=(0,i.uE)('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {\n    listen       80;\n    server_name  zigbee2mqtt.mydomain.com;\n    return 301   https://zigbee2mqtt.mydomain.com$request_uri;\n}\n\nserver {\n    listen      443 ssl http2;\n    listen      [::]:443 ssl http2;\n\n    # In case you want to use basic authentication:\n    auth_basic &quot;Login&quot;;\n    auth_basic_user_file /zigbee2mqtt_htpasswd;\n\n    ssl_certificate     /config/etc/letsencrypt/live/mydomain.com/fullchain.pem;\n    ssl_certificate_key /config/etc/letsencrypt/live/mydomain.com/privkey.pem;\n\n    server_name zigbee2mqtt.mydomain.com;\n\n    location / {\n        proxy_pass http://localhost:8080/;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n\n    location /api {\n        proxy_pass         http://localhost:8080/api;\n        proxy_set_header Host $host;\n\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection &quot;upgrade&quot;;\n    }\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),h={},b=(0,a(983744).Z)(h,[["render",function(e,n){const a=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[t,(0,i._)("div",o,[r,(0,i._)("p",null,[(0,i.Uk)("Ongoing discussion about the frontend can be found "),(0,i._)("a",l,[(0,i.Uk)("here"),(0,i.Wm)(a)])])]),d,(0,i._)("p",null,[(0,i.Uk)("Due to "),(0,i._)("a",c,[(0,i.Uk)("WebKit Bug 80362"),(0,i.Wm)(a)]),(0,i.Uk)(", which prevents basic authentication from being used with WebSockets, the frontend will not work in WebKit-based browsers when this type of authentication is configured. This includes desktop Safari on Mac and "),u,(0,i.Uk)(" browsers and web views on iOS. To work around the issue, configure the frontend's "),p,(0,i.Uk)(" to configure application-level auth and remove "),v,(0,i.Uk)(" from the web server config.")]),m])}]])}}]);