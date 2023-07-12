import Script from 'next/script'

function THMBadge() {
    return (
        <a href='https://tryhackme.com/p/DanArcherOnline' className='w-full block scale-75 hover:scale-90 group-hover:drop-shadow-md transform duration-300'>
            <Script src="https://tryhackme.com/badge/1380671" />
            <div className='flex items-center justify-center'>
                <InnerTHMBadge />
            </div>
            
        </a>
    )
}

export default THMBadge

function InnerTHMBadge() {
    return (
      <div id="thm_badge" className="thm_margin">
        <div style={{width: 'auto', borderRadius: '4px', marginRight: '0px'}}>
          <div className="thm_avatar" style={{backgroundImage: 'url(https://tryhackme-images.s3.amazonaws.com/user-avatars/b817b992007005e2de7aed484b265aca.jpg)'}} />
        </div>
        <div style={{marginLeft: '25px', width: '220px', height: '56px', backgroundColor: '#343c42', borderRadius: '5px', textAlign: 'left', backgroundImage: 'url(https://assets.tryhackme.com/img/thm_logo_only.svg)', backgroundSize: '23px 23px', backgroundPosition: 'right 5px bottom 5px', backgroundRepeat: 'no-repeat'}}>
          <style scoped dangerouslySetInnerHTML={{__html: "\n      .thm_margin {\n        margin: 5px;\n      }\n\n      #thm_badge {\n        width: 210px;\n        display: inline-table;\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n\n      #thm_badge:hover {\n        cursor: pointer;\n      }\n\n      .thm_avatar {\n        display: block;\n        width: 50px;\n        height: 50px;\n        float: left;\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center center;\n        border-radius: 50%;\n        box-sizing: content-box; /* Needed for border to stop changing image width*/\n        border: 3px solid #88cc14;\n        background-color: #343c42;\n        box-shadow: inset 0px 0px 3px 3px rgba(0, 0, 0, 0.1);\n        object-fit: cover;\n        box-shadow: 0 0px 3px 0px #303030;\n      }\n\n      @font-face {\n        font-family: 'Roboto';\n        font-style: normal;\n        font-weight: 400;\n        src: url(https://fonts.gstatic.com/s/ubuntumono/v6/ViZhet7Ak-LRXZMXzuAfkY4P5ICox8Kq3LLUNMylGO4.woff2)\n          format('woff2');\n      }\n\n      .thm_font {\n        font-family: 'Roboto', monospace;\n      }\n\n      .thm_nickname {\n        color: #ffffff;\n        font-size: 12px;\n        font-weight: bold;\n        text-shadow: #000 0 0 6px;\n      }\n\n      .thm_stat {\n        color: #fff;\n        opacity: 0.5;\n        font-size: 14px;\n      }\n\n      .thm_icon {\n        opacity: 0.85;\n        height: 16px;\n      }\n\n      @keyframes flicker {\n        0%,\n        19.999%,\n        22%,\n        62.999%,\n        64%,\n        64.999%,\n        70%,\n        100% {\n          opacity: 0.99;\n          text-shadow: -1px -1px 0 $outline, 1px -1px 0 $outline, -1px 1px 0 $outline,\n            1px 1px 0 $outline, 0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00, 0 0 15px #ff4444,\n            0 0 2px #ff7e00, 0 2px 3px #000;\n        }\n        20%,\n        21.999%,\n        63%,\n        63.999%,\n        65%,\n        69.999% {\n          opacity: 0.4;\n          text-shadow: none;\n        }\n      }\n\n      .thm_rank {\n        color: #ffffff;\n        font-size: 11px;\n      }\n\n      .thm_line {\n        line-height: 12px;\n        margin: 0px;\n        padding: 0px;\n      }\n\n      .thm_link {\n        color: #fff;\n        font-size: 0.6em;\n        text-decoration: none;\n        animation: flicker 6s infinite;\n      }\n\n      .thm_link:hover {\n        color: #fff;\n        font-size: 0.6em;\n        text-decoration: underline;\n      }\n\n      .thm_link:visited {\n        color: #fff;\n      }\n\n      .thm_mr {\n        margin-right: 8px;\n      }\n\n      .thm_for_img {\n        color: #fff;\n        opacity: 0.5;\n        font-size: 14px;\n        position: relative;\n        top: -3px;\n        margin-bottom: 5px;\n      }\n    " }} />
          <div className="thm_font" style={{boxSizing: 'content-box', height: '50px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingLeft: '8px', paddingTop: '5px'}}>
            <p className="thm_line" style={{marginBottom: '3px'}}>
              <span className="thm_nickname">DanArcherOnline</span> <span className="thm_rank">[0x8][Hacker]</span><br />
            </p>
            <p className="thm_line" style={{marginBottom: '1px', display: 'flex', alignItems: 'center'}}>
              <img className="thm_icon thm_mr" src="https://assets.tryhackme.com/img/badges/trophy.png" alt="trophy" />
              <span className="thm_stat thm_mr">59870</span>
              <img className="thm_icon thm_mr" src="https://assets.tryhackme.com/img/badges/door.png" alt="door" />
              <span className="thm_stat thm_mr">62</span>
              <img className="thm_icon thm_mr" src="https://assets.tryhackme.com/img/badges/target.png" alt="target" />
              <span className="thm_stat">13</span><br />
            </p>
            <p className="thm_line">
              <a href="https://www.tryhackme.com" className="thm_link">tryhackme.com</a>
            </p>
          </div>
        </div>
      </div>
    );
}