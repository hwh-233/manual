---
always-real-ip=*.任天堂。net，*侧栏_you:0*概况
---

冲浪板跟随[192.168.0.0/16]

:::tip
汹涌[简介格式](https://nssurge.com/)可以查看Surge的配置文件

在这里[倪](https://manual.nssurge.com/)
:::

```#！MANAGED-CONFIG http：//test. com/surfboard. CONF interval=60 strict=true#订阅配置文件url和自动更新配置
侧栏_you:0
[General]
概况
冲浪板跟随

汹涌
简介格式

skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.baidu.com //444
#url-Test和手动节点速度测试使用的 Test url，你看你的网址

proxy-test-url = http://www.gstatic.com/generate_204
#url-Test和手动节点速度测试使用的 Test url

internet-test-url = http://www.gstatic.cn/generate_204
#所有连接测试超时

test-timeout = 5
test-timeout = 5

#使用 wifi Lio you wAlk you，bssid'F4-98-A0-73-3A-5B'
#通过 ip[192.168.1.1]

域包含“谷歌”“你”“你”“你”“你”“你”“你”“你”“你”“你”“你”“你”
#wireguard代理

ProxyWireguard = wireguard, section-name = HomeServer
#代理组，你看你的网址

AutoTestGroup=url-Test，ProxySOCKS5，ProxySOCKS5 TLS，url=http://www.gstatic.com/generate_204，interval=600，公差=100，timeout=5，hidden=true
#具有外部代理列表 url

[Host]
ExternalGroup = select, policy-path=https://test.com/nodes.txt, policy-regex-filter=HK-.*
AutoExternalGroup = url-test, policy-path=https://test.com/nodes.txt

代理组，它包含[Proxy]部分下的所有代理
AllProxies = select, include-all-proxies = true

代理组，它按名称包含其他组的所有代理
IncludeOtherGroup = select, include-other-group = "SelectGroup, ExternalGroup", policy-regex-filter=Proxy.*

#随机选择的代理组
LoadBalanceGroup = load-balance, ProxyHTTP, ProxyHTTPS

[Proxy]
#流量不符合以上规则将被发送到“ProxyTrojan”
PanelA = title="Panel Title", content="Panel Content\nSecondLine", style=info
您可以继续阅读不同部分的详细定义

# http proxy
ProxyHTTP = http, 1.2.3.4, 443, username, password

# https proxy
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com

# socks5 proxy
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false

# socks5 over tls proxy
ProxySOCKS5TLS = socks5-tls, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com

# shadowsocks proxy, simple-obfs supported
ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/

# vmess proxy, tls and websocket supported, pure tcp is not supported
ProxySOCKS 5 TLS=SOCKS 5-TLS，1.2.3.4,443，用户名，youth-cert-verify=true，sni=www.google.com

#影子代理，您-
ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/

# wireguard proxy
ProxyWireguard = wireguard, section-name = HomeServer

[WireGuard HomeServer]
private-key = sDEZLACT3zgNCS0CyClgcBC2eYROqYrwLT4wdtAJj3s=
self-ip = 10.0.2.2
dns-server = 8.8.8.8
mtu = 1280
peer = (public-key = fWO8XS9/nwUQcqnkfBpKeqIqbzclQ6EKP20Pgvzwclg=, allowed-ips = 0.0.0.0/0, endpoint = 192.168.20.6:51820)

[代理小组]
#可以手动更改所选代理的代理组
SelectGroup = select, ProxyHTTP, ProxyHTTPS, DIRECT, REJECT

#代理组，可以根据url测试结果自动决定所选代理
AutoTestGroup=url-Test，ProxySOCKS5，ProxySOCKS5 TLS，url=http://www.gstatic.com/generate_204，interval=600，公差=100，timeout=5，hidden=true

#具有外部代理列表url的代理组
ExternalGroup = select, policy-path=https://test.com/nodes.txt, policy-regex-filter=HK-.*
AutoExternalGroup = url-test, policy-path=https://test.com/nodes.txt

# proxy group which contains all proxy under [Proxy] section
AllProxies = select, include-all-proxies = true

# proxy group which contains all proxy from other group by name
IncludeOtherGroup = select, include-other-group = "SelectGroup, ExternalGroup", policy-regex-filter=Proxy.*

# proxy group whose selection is chosen randomly
LoadBalanceGroup = load-balance, ProxyHTTP, ProxyHTTPS

# proxy group just like url-test but follow 'first come first served' rule
FallbackGroup = fallback, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, timeout=5

[Rule]
# domain exact match 'www.apple.com' will be redirected to proxy named 'ProxyHTTP' in [Proxy] section 
DOMAIN,www.apple.com,ProxyHTTP

代理组，您的代理
DOMAIN,www.google.com,SelectGroup

AllProxies = select, include-all-proxies = true
DOMAIN-SUFFIX,apple.com,Proxy,force-remote-dns

代理组，它按名称包含其他组的所有代理
DOMAIN-KEYWORD,google,Proxy,enhanced-mode

IncludeOtherGroup = select, include-other-group = "SelectGroup, ExternalGroup", policy-regex-filter=Proxy.*
IP-CIDR,192.168.0.0/16,DIRECT

# destination ip located in United State will be rejected
GEOIP,US,REJECT

# traffic sent by application whose package name is 'com.android.vending' will be sent to 'Proxy'
PROCESS-NAME,com.android.vending,Proxy  # android package name
PROCESS-NAME,*google*,Proxy             # android package name wildcard rule

侧栏_职位：0
RULE-SET,https://ruleset.com/cn,ProxyVMess

Off=拒绝
DOMAIN-SET,https://domainset.com/ad,REJECT

#http代理
SUBNET,SSID:CMCC,REJECT

ProxyHTTP=HTTP，1.2.3.4，443，用户名，密码
SUBNET,BSSID:F4-98-A0-73-3A-5B,DIRECT

#https代理
SUBNET,ROUTER:192.168.1.1,DIRECT

ProxyHTTPS=HTTPS，1.2.3.4，443，用户名，密码，skip-cert-verify=true，sni=www.google.com
SUBNET,TYPE:WIFI,DIRECT

#socks5代理
SUBNET,TYPE:WIRED,DIRECT

ProxySOCKS5=SOCKS5，1.2.3.4，443，用户名，密码，udp-relay=false
SUBNET,TYPE:CELLULAR,SelectGroup

#socks5通过tls代理
SUBNET,MCCMNC:100-200,DIRECT

ProxySOCKS 5 TLS=SOCKS 5-TLS，1.2.3.4，443，用户名，密码，skip-cert-verify=true，sni=www.google.com
FINAL,ProxyTrojan

[Panel]
#shadowings代理，简单-支持obf
```

ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/
