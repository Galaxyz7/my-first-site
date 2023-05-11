import { tokens } from "../../theme";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const PostA = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeA);
  };
  
  const codeA = `
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

    const firstText = `1.) Install apache 2 and openssl with you favorite package manager.
    

2.) Open ports 80 and or 443 on desired zone on the OS Firewall 
(and port forward on the Router/Network Firewall if you want anyone from 
outside your Local network to access it. )
    
*Before port forwarding on your router you will want to make sure you have a good 
understanding of network security.


3.) Reload firewall


4.) Move .cert to /etc/ssl/certs and the .key to /etc/ssl/private


5.) Create new config file by pasting the text below at 

/etc/apache2/sites-available/server-ip-or-hostname.conf  

I added a port 80 redirect to 443 to always keep users traffic on https.  
*change anything in parenthesis and remove parenthesis

    `;

    const secondText = `
    6.) Reload apache2 with sudo systemctl restart apache2

    Now you should be good as long as certs are valid, ports are open, and service is running. 
    If there are any other files in the /etc/apache2/sites-available/ directory you can rename 
    them to old and also change the file in /var/www/ to match DocumentRoot name in Conf file. 
    
    `

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
              textAlign: 'center',
            }}>
              <pre>
{firstText}
              </pre>
          </Box>

          <div style = {{
            display: 'block',
            borderRadius: '10px',
          }}>
            <div style = {{
              '--opac': '1',
              backgroundColor: colors.grey[1000],
              display: 'flex',
              margin: '0 auto',
              width: '80%',
            }}
            >
              <span style={{ 
                marginLeft: '5px',
                marginTop: '5px',
              }}>
                  Code
              </span>
              <button onClick={handleCopy} style = {{ marginLeft: 'auto', marginRight: '0' }}>
                <ContentCopyIcon />
                Copy
              </button>
            </div>
            <Box>         
                <code style={codeStyle}
              dangerouslySetInnerHTML={{ __html: codeA }}></code>
            </Box>
          </div>  

          <Box style= {{
              display: 'block',
              width: '80%',
              margin: '0 auto',
              padding: '1rem',
              textAlign: 'center',
            }}>
              <pre>
{secondText}
              </pre>
          </Box>
        </div>
      </pre>
    </Box>
  )
}

export default PostA;