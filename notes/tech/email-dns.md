# Emails

## SPF vs DKIM vs DMARC

- **SPF** : These are the servers I will send from. If it says it's from me, but comes from somewhere else, it's likely fake
- **DKIM** : This is my signature, if it's not on the email, it probably didn't come from my server.
- **DMARC** : If you get mail that doesn't match the above, here's what I want you to do with it. 

Source: <https://www.reddit.com/r/sysadmin/comments/16gvtdj/comment/k0aidyz/>

## DNS records for domains with no emails

SPF
```
mydomain.io. TXT "v=spf1 -all"
*.mydomain.io. TXT "v=spf1 -all"
```

DMARC:
```
_dmarc.mydomain.io. TXT "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s"
```

Source: <https://news.ycombinator.com/item?id=49083890>

MX:
```
@ IN MX 0 .
```
