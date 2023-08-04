import React from 'react';

type ButtonProps = {
  Width?: string;
  Height?: string;
  button_icon?: string;
  button_text?: React.ReactNode;
  style?: React.CSSProperties;
  Style?: 'out' | 'in' | 'border';
  link?: string;
  onClick?: () => void;
  id?: string;
  checked?: boolean;
};

/* 
  按钮组件
  Width: 按钮宽度 默认40px
  Height: 按钮高度 默认40px
  button_icon: 按钮图标 用import或require('路径')引入
  button_text: 按钮文字 也可插入组件
  style: 可直接写css样式
  Style: 按钮风格 border/in/out
*/
const Button: React.FC<ButtonProps> = ({
  Width = '40px',
  Height = '40px',
  button_icon,
  button_text,
  style,
  Style,
  link,
  onClick,
  id,
  checked,
}) => {
  // 按钮样式
  const buttonStyle = () => {
    let styleClass = '';
    switch (Style) {
      case 'out':
        styleClass = 'neuShadow_out';
        break;
      case 'in':
        styleClass = 'neuShadow_in';
        break;
      default:
        styleClass = 'neuShadow_border';
        break;
    }
    return styleClass;
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="nofollow noopener noreferrer"
      style={style}
      onClick={onClick}
    >
      {id && (
        <input
          type="checkbox"
          id={id}
          checked={checked}
          readOnly
          className="testChecked"
          style={{ appearance: 'none', display: 'none' }}
        />
      )}
      <label
        htmlFor={id}
        className={`columnCenter ${buttonStyle()}`}
        style={{
          width: Width,
          height: Height,
          cursor: 'pointer',
          fontSize: '12px',
        }}
      >
        {/* 图标 */}
        {button_icon && <img src={button_icon} alt="" width="50%" />}

        {/* 文字 */}
        {button_text}
      </label>
    </a>
  );
};

export default Button;
