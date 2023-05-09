import { tokens } from "../../theme";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const PostA = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [copied, setCopied] = useState(false);
  
  const codeBlock = `
    {"<"}VirtualHost (IP or *):443{">"}
        ServerName (server-ip-or-hostname)
        DocumentRoot /var/www/html    

        SSLEngine on
        SSLCertificateFile /etc/ssl/certs/(ip-or-hostname).crt 
        SSLCertificateKeyFile /etc/ssl/private/(ip-or-hostname).key
    {"<"/}VirtualHost{">"}

    {"<"}VirtualHost (ip or "*"):80{">"}
        ServerName (ip-or-hostname)
        Redirect / https://(ip-or-hostname)/
    {"<"/}VirtualHost{">"}
    `;

    const firstText = `    1.) Install apache 2 and openssl with you favorite package manager.
    
    2.) Open ports 80 and or 443 on desired zone on the OS Firewall (and port forward on the Router/Network Firewall
    if you want anyone from outside your Local network to access it. )
    *Before port forwarding on your router you will want to make sure you have a good understanding of
    network security.

    3.) Reload firewall

    4.) Move .cert to /etc/ssl/certs 
    and the .key to /etc/ssl/private

    5.) Create new config file in /etc/apache2/sites-available/server-ip-or-hostname.conf, I added a port 80 redirect 
    to 443 to always keep users traffic on https.  (you may copy below and edit anything i

    `;

    const codeStyle = {
      display: 'block',
      margin: '0 auto',
      width: '80%',
      backgroundColor: colors.primary[400],
      padding: '1em',
      borderRadius: '4px',
      wordBreak: 'break-word',
      boxSizing: 'border-box',
    };

  return (
    <Box>
      <h1 style= {{
        display: 'block',
        width: '80%',
        margin: '0 auto',
        padding: '1rem',
        textAlign: 'center'
      }}>
        Apache 2 with SSL Linux
      </h1>  
      <br/>

      <pre>
        <div>
          <Box style= {{
              display: 'block',
              width: '80%',
              margin: '0 auto',
              padding: '1rem',
            }}>
              <pre>
{firstText}
              </pre>
          </Box>
          <div style = {{
            '--opac': '1',
            backgroundColor: "rgba(52,53,65,var(--opac))",
            display: 'flex',
            margin: '0 auto',
            width: '80%',
            borderRadius: '5px',
          }}
          >
            <span style={{ 
              marginLeft: '5px',
              marginTop: '5px',
            }}>
                Code
            </span>
            <button style = {{ marginLeft: 'auto', marginRight: '0' }}>
              <ContentCopyIcon />
              Copy
            </button>
          </div>
          <Box>         
              <code style={codeStyle}
            dangerouslySetInnerHTML={{ __html: codeBlock }}></code>
            

          </Box>
        </div>
      </pre>
    </Box>
  )
}

export default PostA;