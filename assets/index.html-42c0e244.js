import{_ as d,V as o,n as u,p,q as e,J as t,C as s,A as a,a5 as r}from"./framework-528c2e2a.js";const m={},g={class:"table-of-contents"};function v(c,n){const l=o("router-link"),i=o("RouterLink");return u(),p("div",null,[n[44]||(n[44]=e("h1",{id:"installation-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation-guide","aria-hidden":"true"},"#"),t(" Installation Guide")],-1)),e("nav",g,[e("ul",null,[e("li",null,[s(l,{to:"#requirements"},{default:a(()=>n[0]||(n[0]=[t("Requirements")])),_:1})]),e("li",null,[s(l,{to:"#installation-instructions"},{default:a(()=>n[1]||(n[1]=[t("Installation Instructions")])),_:1}),e("ul",null,[e("li",null,[s(l,{to:"#registering"},{default:a(()=>n[2]||(n[2]=[t("Registering")])),_:1})]),e("li",null,[s(l,{to:"#selinux-support"},{default:a(()=>n[3]||(n[3]=[t("SELinux support")])),_:1})]),e("li",null,[s(l,{to:"#troubleshooting"},{default:a(()=>n[4]||(n[4]=[t("Troubleshooting")])),_:1})])])]),e("li",null,[s(l,{to:"#compatibility"},{default:a(()=>n[5]||(n[5]=[t("Compatibility")])),_:1})])])]),n[45]||(n[45]=r('<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><p><strong>Supported operating systems</strong></p><ul><li><span class="notranslate">CentOS/RHEL</span> 6,7,8,9</li><li><span class="notranslate">CloudLinux</span> OS 6,7,8,9</li><li><span class="notranslate">Ubuntu</span> 16.04 (LTS only), 18.04, 20.04 (LTS), and 22 (Plesk, DirectAdmin, and standalone)</li><li><span class="notranslate">Debian</span> 9 (up to Imunify v6.11 (including)), 10 (requires buster-backports), 11 &amp; 12 (Plesk, DirectAdmin, and stand-alone)</li><li><span class="notranslate">AlmaLinux</span> 8,9</li><li><span class="notranslate">Rocky Linux</span> 8,9 (cPanel, Plesk, and standalone)</li></ul><p><strong>Virtualization</strong></p><p><span class="notranslate">OpenVZ</span> - works for <span class="notranslate">Virtuozzo</span> 7 with kernel 3.10.0-1160.80.1.vz7.191.4 or newer.</p><p><strong>Hardware</strong></p><ul><li><span class="notranslate">RAM: 1GB</span></li><li><span class="notranslate">HDD: 20GB</span> available disk space</li><li><span class="notranslate">CPU: 64bit</span> version on <span class="notranslate">x86_64</span> processors only</li></ul><p><strong>Supported hosting panels</strong></p>',8)),e("ul",null,[n[9]||(n[9]=r('<li><span class="notranslate">cPanel</span></li><li><span class="notranslate">Plesk (Plesk</span> 17.5 or newer)</li><li><span class="notranslate">DirectAdmin</span></li><li><span class="notranslate">CyberPanel</span> (only CloudLinux OS 7 and 8). See <a href="https://community.cyberpanel.net/docs?category=49&amp;tags=cloudlinux&amp;topic=172" target="_blank" rel="noopener noreferrer">3rd party integration guide from CyberPanel</a></li><li><span class="notranslate">Webuzo</span> (<a href="https://webuzo.com/docs/installing-webuzo/install-imunify360/" target="_blank" rel="noopener noreferrer">Imunify360 installation guide</a>)</li>',5)),e("li",null,[n[7]||(n[7]=t("For other Generic hosting panels or no-panel configurations, the ")),s(i,{to:"/control_panel_integration/#settings-related-to-stand-alone-version/"},{default:a(()=>n[6]||(n[6]=[t("dedicated Stand-Alone installation documentation")])),_:1}),n[8]||(n[8]=t(" should be used"))])]),n[46]||(n[46]=r('<p><strong>Required browsers</strong></p><ul><li><span class="notranslate">Safari</span> version 10 or later</li><li><span class="notranslate">Chrome</span> version 39 or later</li><li><span class="notranslate">Firefox</span> version 28 or later</li><li><span class="notranslate">Edge</span> version 17 or later</li></ul><p><strong>Supported Web-servers</strong></p>',3)),e("ul",null,[n[14]||(n[14]=e("li",null,[e("span",{class:"notranslate"},"Apache")],-1)),n[15]||(n[15]=e("li",null,[e("span",{class:"notranslate"},"LiteSpeed")],-1)),e("li",null,[n[11]||(n[11]=e("span",{class:"notranslate"},"Nginx",-1)),n[12]||(n[12]=t(" (fully supported in the ")),s(i,{to:"/control_panel_integration/#introduction"},{default:a(()=>n[10]||(n[10]=[e("span",{class:"notranslate"},"Standalone mode",-1)])),_:1}),n[13]||(n[13]=t("; for supported control panels – with ModSec 3 only for now)"))])]),n[47]||(n[47]=r(`<h2 id="installation-instructions" tabindex="-1"><a class="header-anchor" href="#installation-instructions" aria-hidden="true">#</a> Installation Instructions</h2><div class="tip custom-block"><p class="custom-block-title"></p><p><strong>No hosting panel installation note:</strong></p><p>This instruction is intended for supported panels such as cPanel, Plesk, DirectAdmin, etc. from the list above. If you are currently using a non-supported control panel, please proceed with the <a href="/control_panel_integration">Stand-Alone documentation section</a>.</p></div><ol><li><p>Get your license key at <a href="https://www.imunify360.com/" target="_blank" rel="noopener noreferrer">https://www.imunify360.com/</a>. You can purchase it or get a trial key from a received email.</p></li><li><p>Log in with root privileges to the server where Imunify360 should be installed.</p></li><li><p>Go to your home directory and run the commands:</p></li></ol><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.imunify360.cloudlinux.com/defence360/i360deploy.sh -O i360deploy.sh
bash i360deploy.sh --key YOUR_KEY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>where <span class="notranslate"><code>YOUR_KEY</code></span> is your license key. Replace <span class="notranslate"><code>YOUR_KEY </code></span> with the actual key - trial or purchased at <a href="https://www.imunify360.com/" target="_blank" rel="noopener noreferrer">https://www.imunify360.com/</a>.</p><p>To install Imunify360 beta version add argument <span class="notranslate"><code>--beta</code></span> . For example:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash i360deploy.sh --key YOUR_KEY --beta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>If you have an IP-based license, run the same script with no arguments:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash i360deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>To view available options for installation script run:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash i360deploy.sh -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="registering" tabindex="-1"><a class="header-anchor" href="#registering" aria-hidden="true">#</a> Registering</h3><p>In a case of registration key is passed later, then you can register an activation key via the <span class="notranslate">Imunify360-agent</span> command:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>imunify360-agent register YOUR_KEY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>Where <span class="notranslate"><code>YOUR_KEY</code></span> is your activation key.</p><p>If you have IP-based license, you can use the following command:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>imunify360-agent register IPL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="selinux-support" tabindex="-1"><a class="header-anchor" href="#selinux-support" aria-hidden="true">#</a> SELinux support</h3><p>If SELinux (Security-Enhanced Linux) is enabled on your server, you should install the Imunify360 SELinux policy module. You can check SELinux status by <code>sestatus</code> command. Policy is shipped with Imunify360 package and is located in the <span class="notranslate"><code>/opt/imunify360/venv/share/imunify360/imunify360.te</code></span></p><p>To apply it, run the following commands:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>checkmodule -M -m -o /var/imunify360/imunify360.mod /opt/imunify360/venv/share/imunify360/imunify360.te
semodule_package -o /var/imunify360/imunify360.pp -m /var/imunify360/imunify360.mod
semodule -i /var/imunify360/imunify360.pp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>After that, restart imunify360 and imunify360-webshield services. For CentOS6/CloudLinux6:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service imunify360 restart
service imunify360-webshield restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>For other systems:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl restart imunify360
systemctl restart imunify360-webshield
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>If <i>checkmodule</i> command is not found, please, install it: For CentOS8/CloudLinux 8:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install policycoreutils-python-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h3><p>On DirectAdmin, Imunify UI requires the <span class="notranslate"><code>proc_open</code></span> PHP function to be enabled. If you are unable to open the Imunify UI, you might see a related message in the web server error log. If so, please remove it from the <span class="notranslate"><code>disable_functions</code></span> list in <span class="notranslate"><code>php.ini</code></span>.</p><h2 id="compatibility" tabindex="-1"><a class="header-anchor" href="#compatibility" aria-hidden="true">#</a> Compatibility</h2><p><strong>Compatible</strong></p>`,31)),e("table",null,[n[43]||(n[43]=e("thead",null,[e("tr",null,[e("th"),e("th")])],-1)),e("tbody",null,[n[33]||(n[33]=e("tr",null,[e("td",null,[e("strong",null,[e("span",{class:"notranslate"},"IDS"),t(" name")])]),e("td",null,[e("strong",null,"Comment")])],-1)),n[34]||(n[34]=e("tr",null,[e("td",null,[e("span",{class:"notranslate"},"LiteSpeed")]),e("td",null,"Integrates with version 5.1 or higher.")],-1)),n[35]||(n[35]=e("tr",null,[e("td",null,[e("span",{class:"notranslate"},"EasyApache3")]),e("td",null,"Works only in cPanel.")],-1)),n[36]||(n[36]=e("tr",null,[e("td",null,[e("span",{class:"notranslate"},"EasyApache4")]),e("td",null,"Works only in cPanel.")],-1)),e("tr",null,[n[21]||(n[21]=e("td",null,[e("span",{class:"notranslate"},"CSF")],-1)),e("td",null,[n[17]||(n[17]=t("Integrated with ")),n[18]||(n[18]=e("span",{class:"notranslate"},"CSF",-1)),n[19]||(n[19]=t(", more details ")),s(i,{to:"/ids_integration/#csf-integration"},{default:a(()=>n[16]||(n[16]=[t("here")])),_:1}),n[20]||(n[20]=t("."))])]),n[37]||(n[37]=e("tr",null,[e("td",null,[e("span",{class:"notranslate"},"CWAF Agent")]),e("td",null,"No problems detected.")],-1)),n[38]||(n[38]=e("tr",null,[e("td",null,[e("span",{class:"notranslate"},"Patchman")]),e("td",null,"No problems detected.")],-1)),n[39]||(n[39]=e("tr",null,[e("td",null,[e("span",{class:"notranslate"},"Suhosin")]),e("td",null,[t("We are ignoring alerts by "),e("span",{class:"notranslate"},"Suhosin"),t(".")])],-1)),e("tr",null,[n[27]||(n[27]=e("td",null,[e("span",{class:"notranslate"},"Cloudflare")],-1)),e("td",null,[n[23]||(n[23]=t("Imunify360 supports graylisting IP addresses behind ")),n[24]||(n[24]=e("span",{class:"notranslate"},"Cloudflare",-1)),n[25]||(n[25]=t(". More details ")),s(i,{to:"/ids_integration/#cloudflare-support"},{default:a(()=>n[22]||(n[22]=[t("here")])),_:1}),n[26]||(n[26]=t("."))])]),e("tr",null,[n[32]||(n[32]=e("td",null,[e("span",{class:"notranslate"},"CXS")],-1)),e("td",null,[s(i,{to:"/ids_integration/#cxs-integration"},{default:a(()=>n[28]||(n[28]=[t("Special actions required")])),_:1}),n[29]||(n[29]=t(" to use Imunify360 with ")),n[30]||(n[30]=e("span",{class:"notranslate"},"CXS",-1)),n[31]||(n[31]=t(" installed."))])]),n[40]||(n[40]=e("tr",null,[e("td",null,[e("span",{class:"notranslate"},"cPHulk")]),e("td",null,[t("Imunify360 disables "),e("span",{class:"notranslate"},"cPHulk"),t(" during installation. However in case of enabling it back, Imunify360 integrates with it and shows "),e("span",{class:"notranslate"},"cPHulk"),t(" events in the incident screen.")])],-1)),n[41]||(n[41]=e("tr",null,[e("td",null,[e("span",{class:"notranslate"},"OpenVZ")]),e("td",null,[t("Works for "),e("span",{class:"notranslate"},"Virtuozzo"),t(" 7 with kernel 3.10.0-1160.80.1.vz7.191.4 or later.")])],-1)),n[42]||(n[42]=e("tr",null,[e("td",null,[e("span",{class:"notranslate"},"UptimeRobot")]),e("td",null,"No problems detected.")],-1))])]),n[48]||(n[48]=r('<p><strong>Incompatible</strong></p><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td><strong><span class="notranslate">IDS</span> name</strong></td><td><strong>Comment</strong></td></tr><tr><td><span class="notranslate">ASL (Atomicorp Secured Linux)</span></td><td><span class="notranslate">ASL</span> is not compatible with <span class="notranslate">Imunify360</span>, and cannot be run with <span class="notranslate">Imunify360</span> on the same server.</td></tr><tr><td><span class="notranslate">fail2ban</span></td><td>Imunify360 disables <span class="notranslate">fail2ban</span>: the latter resets chains of iptables rules which causes inconsistency with Imunify360</td></tr></tbody></table>',2))])}const f=d(m,[["render",v],["__file","index.html.vue"]]);export{f as default};
