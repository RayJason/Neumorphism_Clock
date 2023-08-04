import React from 'react';
import './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className="columnCenter">
      <ul>
        <li className="rowCenter">Design by RayJason</li>
        {/* <li className="rowCenter">
          <a
            href="http://beian.miit.gov.cn/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            style={{ marginRight: '10px' }}
          >
            粤ICP备19156266号
          </a>
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44040202001115"
            style={{ display: 'inline-block', textDecoration: 'none' }}
            rel="nofollow noopener noreferrer"
          >
            <p>粤公网安备 44040202001115号</p>
          </a>
        </li> */}
      </ul>
    </footer>
  );
};

export default Footer;
