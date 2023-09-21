import "./AkindNavbar.scss";

export const AkindNavbar = () => {
  return (
    <header className="akind_navbar">
      <nav className="akind_navbar_left_container">
        <a href="#" className="akind_navbar_link"><span className="akind_navbar_link_text">Home</span><span className="akind_navbar_link_underline"></span></a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
          className="nav_svg"
        >
          <path
            fill="currentColor"
            d="M9.38 13.178a4.319 4.319 0 1 1-.003-8.637 4.319 4.319 0 0 1 .003 8.637Zm0-8.172a3.852 3.852 0 1 0 3.85 3.852 3.856 3.856 0 0 0-3.85-3.85v-.002Zm0-1.121a.198.198 0 0 0 .196-.197V.52a.197.197 0 1 0-.394 0v3.168a.2.2 0 0 0 .058.136.199.199 0 0 0 .14.061Zm0 9.951a.198.198 0 0 0-.198.198v3.168a.197.197 0 1 0 .394 0v-3.168a.195.195 0 0 0-.196-.198Zm8.34-5.173h-3.169a.197.197 0 0 0 0 .394h3.17a.197.197 0 0 0 0-.394ZM4.403 8.86a.2.2 0 0 0-.057-.136.197.197 0 0 0-.136-.057H1.038a.197.197 0 0 0 0 .394h3.169a.195.195 0 0 0 .196-.196V8.86Zm8.773 3.52a.197.197 0 0 0-.137-.07.202.202 0 0 0-.19.126.195.195 0 0 0-.014.079.2.2 0 0 0 .068.136l2.24 2.246a.199.199 0 0 0 .285 0 .198.198 0 0 0 0-.272l-2.252-2.245ZM5.584 5.343a.197.197 0 1 0 .28-.273L3.621 2.823a.197.197 0 1 0-.273.279l2.235 2.24Zm0 7.037-2.242 2.243a.195.195 0 0 0 .014.293.198.198 0 0 0 .265-.015l2.235-2.243a.197.197 0 0 0 0-.272.196.196 0 0 0-.279 0l.007-.006Zm7.453-6.98a.187.187 0 0 0 .136-.057l2.247-2.241a.197.197 0 0 0-.208-.335.198.198 0 0 0-.064.056l-2.25 2.24a.198.198 0 0 0 .029.304c.032.022.07.033.11.033Zm-10.503.89 1.98.803a.199.199 0 1 0 .149-.37l-1.97-.804a.2.2 0 0 0-.159.366v.004Zm13.692 5.144-1.985-.807a.201.201 0 0 0-.156 0 .2.2 0 0 0-.112.11.198.198 0 0 0 .12.26l1.97.807a.19.19 0 0 0 .196-.032.198.198 0 0 0-.048-.333l.015-.005ZM7.189 4.17a.199.199 0 0 0 .182.121.177.177 0 0 0 .075-.016.193.193 0 0 0 .107-.258l-.831-1.97a.198.198 0 0 0-.363.155l.83 1.968Zm4.388 9.38a.197.197 0 0 0-.362.154l.83 1.971a.197.197 0 1 0 .362-.153l-.83-1.972Zm-.321-9.299a.196.196 0 0 0 .256-.106l.806-1.97a.197.197 0 0 0-.258-.251.197.197 0 0 0-.107.1L11.147 4a.195.195 0 0 0 .109.257V4.25Zm-3.75 9.219a.196.196 0 0 0-.259.107l-.805 1.971a.196.196 0 0 0 .108.256c.024.01.05.015.075.014a.197.197 0 0 0 .184-.121l.803-1.971a.196.196 0 0 0-.106-.256Zm6.459-6.542a.196.196 0 0 0 .259.106l1.97-.832a.194.194 0 0 0 .127-.183.198.198 0 0 0-.127-.185.195.195 0 0 0-.153 0l-1.971.835a.197.197 0 0 0-.105.259Zm-9.169 3.865a.19.19 0 0 0-.108-.106.198.198 0 0 0-.153 0l-1.969.831a.198.198 0 0 0 .076.381.163.163 0 0 0 .077-.015l1.97-.83a.197.197 0 0 0 .107-.258v-.003Z"
          ></path>
        </svg>
        <a href="#" className="akind_navbar_link"><span className="akind_navbar_link_text">Projects</span><span className="akind_navbar_link_underline"></span></a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
          className="nav_svg"
        >
          <path
            fill="currentColor"
            d="M9.38 13.178a4.319 4.319 0 1 1-.003-8.637 4.319 4.319 0 0 1 .003 8.637Zm0-8.172a3.852 3.852 0 1 0 3.85 3.852 3.856 3.856 0 0 0-3.85-3.85v-.002Zm0-1.121a.198.198 0 0 0 .196-.197V.52a.197.197 0 1 0-.394 0v3.168a.2.2 0 0 0 .058.136.199.199 0 0 0 .14.061Zm0 9.951a.198.198 0 0 0-.198.198v3.168a.197.197 0 1 0 .394 0v-3.168a.195.195 0 0 0-.196-.198Zm8.34-5.173h-3.169a.197.197 0 0 0 0 .394h3.17a.197.197 0 0 0 0-.394ZM4.403 8.86a.2.2 0 0 0-.057-.136.197.197 0 0 0-.136-.057H1.038a.197.197 0 0 0 0 .394h3.169a.195.195 0 0 0 .196-.196V8.86Zm8.773 3.52a.197.197 0 0 0-.137-.07.202.202 0 0 0-.19.126.195.195 0 0 0-.014.079.2.2 0 0 0 .068.136l2.24 2.246a.199.199 0 0 0 .285 0 .198.198 0 0 0 0-.272l-2.252-2.245ZM5.584 5.343a.197.197 0 1 0 .28-.273L3.621 2.823a.197.197 0 1 0-.273.279l2.235 2.24Zm0 7.037-2.242 2.243a.195.195 0 0 0 .014.293.198.198 0 0 0 .265-.015l2.235-2.243a.197.197 0 0 0 0-.272.196.196 0 0 0-.279 0l.007-.006Zm7.453-6.98a.187.187 0 0 0 .136-.057l2.247-2.241a.197.197 0 0 0-.208-.335.198.198 0 0 0-.064.056l-2.25 2.24a.198.198 0 0 0 .029.304c.032.022.07.033.11.033Zm-10.503.89 1.98.803a.199.199 0 1 0 .149-.37l-1.97-.804a.2.2 0 0 0-.159.366v.004Zm13.692 5.144-1.985-.807a.201.201 0 0 0-.156 0 .2.2 0 0 0-.112.11.198.198 0 0 0 .12.26l1.97.807a.19.19 0 0 0 .196-.032.198.198 0 0 0-.048-.333l.015-.005ZM7.189 4.17a.199.199 0 0 0 .182.121.177.177 0 0 0 .075-.016.193.193 0 0 0 .107-.258l-.831-1.97a.198.198 0 0 0-.363.155l.83 1.968Zm4.388 9.38a.197.197 0 0 0-.362.154l.83 1.971a.197.197 0 1 0 .362-.153l-.83-1.972Zm-.321-9.299a.196.196 0 0 0 .256-.106l.806-1.97a.197.197 0 0 0-.258-.251.197.197 0 0 0-.107.1L11.147 4a.195.195 0 0 0 .109.257V4.25Zm-3.75 9.219a.196.196 0 0 0-.259.107l-.805 1.971a.196.196 0 0 0 .108.256c.024.01.05.015.075.014a.197.197 0 0 0 .184-.121l.803-1.971a.196.196 0 0 0-.106-.256Zm6.459-6.542a.196.196 0 0 0 .259.106l1.97-.832a.194.194 0 0 0 .127-.183.198.198 0 0 0-.127-.185.195.195 0 0 0-.153 0l-1.971.835a.197.197 0 0 0-.105.259Zm-9.169 3.865a.19.19 0 0 0-.108-.106.198.198 0 0 0-.153 0l-1.969.831a.198.198 0 0 0 .076.381.163.163 0 0 0 .077-.015l1.97-.83a.197.197 0 0 0 .107-.258v-.003Z"
          ></path>
        </svg>
        <a href="#" className="akind_navbar_link"><span className="akind_navbar_link_text">Mission</span><span className="akind_navbar_link_underline"></span></a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
          className="nav_svg"
        >
          <path
            fill="currentColor"
            d="M9.38 13.178a4.319 4.319 0 1 1-.003-8.637 4.319 4.319 0 0 1 .003 8.637Zm0-8.172a3.852 3.852 0 1 0 3.85 3.852 3.856 3.856 0 0 0-3.85-3.85v-.002Zm0-1.121a.198.198 0 0 0 .196-.197V.52a.197.197 0 1 0-.394 0v3.168a.2.2 0 0 0 .058.136.199.199 0 0 0 .14.061Zm0 9.951a.198.198 0 0 0-.198.198v3.168a.197.197 0 1 0 .394 0v-3.168a.195.195 0 0 0-.196-.198Zm8.34-5.173h-3.169a.197.197 0 0 0 0 .394h3.17a.197.197 0 0 0 0-.394ZM4.403 8.86a.2.2 0 0 0-.057-.136.197.197 0 0 0-.136-.057H1.038a.197.197 0 0 0 0 .394h3.169a.195.195 0 0 0 .196-.196V8.86Zm8.773 3.52a.197.197 0 0 0-.137-.07.202.202 0 0 0-.19.126.195.195 0 0 0-.014.079.2.2 0 0 0 .068.136l2.24 2.246a.199.199 0 0 0 .285 0 .198.198 0 0 0 0-.272l-2.252-2.245ZM5.584 5.343a.197.197 0 1 0 .28-.273L3.621 2.823a.197.197 0 1 0-.273.279l2.235 2.24Zm0 7.037-2.242 2.243a.195.195 0 0 0 .014.293.198.198 0 0 0 .265-.015l2.235-2.243a.197.197 0 0 0 0-.272.196.196 0 0 0-.279 0l.007-.006Zm7.453-6.98a.187.187 0 0 0 .136-.057l2.247-2.241a.197.197 0 0 0-.208-.335.198.198 0 0 0-.064.056l-2.25 2.24a.198.198 0 0 0 .029.304c.032.022.07.033.11.033Zm-10.503.89 1.98.803a.199.199 0 1 0 .149-.37l-1.97-.804a.2.2 0 0 0-.159.366v.004Zm13.692 5.144-1.985-.807a.201.201 0 0 0-.156 0 .2.2 0 0 0-.112.11.198.198 0 0 0 .12.26l1.97.807a.19.19 0 0 0 .196-.032.198.198 0 0 0-.048-.333l.015-.005ZM7.189 4.17a.199.199 0 0 0 .182.121.177.177 0 0 0 .075-.016.193.193 0 0 0 .107-.258l-.831-1.97a.198.198 0 0 0-.363.155l.83 1.968Zm4.388 9.38a.197.197 0 0 0-.362.154l.83 1.971a.197.197 0 1 0 .362-.153l-.83-1.972Zm-.321-9.299a.196.196 0 0 0 .256-.106l.806-1.97a.197.197 0 0 0-.258-.251.197.197 0 0 0-.107.1L11.147 4a.195.195 0 0 0 .109.257V4.25Zm-3.75 9.219a.196.196 0 0 0-.259.107l-.805 1.971a.196.196 0 0 0 .108.256c.024.01.05.015.075.014a.197.197 0 0 0 .184-.121l.803-1.971a.196.196 0 0 0-.106-.256Zm6.459-6.542a.196.196 0 0 0 .259.106l1.97-.832a.194.194 0 0 0 .127-.183.198.198 0 0 0-.127-.185.195.195 0 0 0-.153 0l-1.971.835a.197.197 0 0 0-.105.259Zm-9.169 3.865a.19.19 0 0 0-.108-.106.198.198 0 0 0-.153 0l-1.969.831a.198.198 0 0 0 .076.381.163.163 0 0 0 .077-.015l1.97-.83a.197.197 0 0 0 .107-.258v-.003Z"
          ></path>
        </svg>
        <a href="#" className="akind_navbar_link"><span className="akind_navbar_link_text">Team</span><span className="akind_navbar_link_underline"></span></a>
      </nav>
      <div className="akind_navbar_center_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 48 50"
          className="center_svg"
        >
          <path
            fill="currentColor"
            d="M24.002 36.98a11.97 11.97 0 0 1-6.724-2.07 12.247 12.247 0 0 1-4.458-5.513 12.46 12.46 0 0 1-.69-7.099 12.345 12.345 0 0 1 3.312-6.291 12.045 12.045 0 0 1 6.196-3.363 11.93 11.93 0 0 1 6.992.7c2.211.93 4.1 2.506 5.43 4.527a12.42 12.42 0 0 1 2.038 6.827 12.393 12.393 0 0 1-3.548 8.68 12.02 12.02 0 0 1-8.548 3.602Zm0-23.247a10.68 10.68 0 0 0-5.997 1.845 10.922 10.922 0 0 0-3.976 4.916 11.114 11.114 0 0 0-.615 6.331 11.011 11.011 0 0 0 2.952 5.611 10.742 10.742 0 0 0 5.525 3 10.64 10.64 0 0 0 6.236-.623 10.828 10.828 0 0 0 4.843-4.035 11.077 11.077 0 0 0 1.819-6.088 11.055 11.055 0 0 0-3.165-7.738 10.72 10.72 0 0 0-7.622-3.211v-.008Zm0-3.188a.55.55 0 0 0 .388-.166.566.566 0 0 0 .161-.396V.97a.57.57 0 0 0-.33-.561.546.546 0 0 0-.629.134.563.563 0 0 0-.144.427v9.012c.002.145.06.284.16.387a.557.557 0 0 0 .393.175Zm0 28.306a.549.549 0 0 0-.392.165.566.566 0 0 0-.162.397v9.012a.57.57 0 0 0 .144.427.554.554 0 0 0 .408.181.547.547 0 0 0 .407-.181.563.563 0 0 0 .144-.427v-9.012a.562.562 0 0 0-.159-.398.546.546 0 0 0-.39-.164Zm23.374-14.715h-8.88a.55.55 0 0 0-.361.18.566.566 0 0 0 0 .76.55.55 0 0 0 .361.18h8.88a.55.55 0 0 0 .36-.18.567.567 0 0 0 0-.76.55.55 0 0 0-.36-.18Zm-37.317.562a.55.55 0 0 0-.542-.55H.63a.55.55 0 0 0-.361.18.567.567 0 0 0 0 .76.55.55 0 0 0 .36.18h8.88a.54.54 0 0 0 .509-.344.562.562 0 0 0 .04-.215v-.011ZM34.642 34.71a.553.553 0 0 0-.382-.198.553.553 0 0 0-.412.166.55.55 0 0 0-.103.628.567.567 0 0 0 .134.174l6.277 6.39a.557.557 0 0 0 .615.125.558.558 0 0 0 .182-.126.567.567 0 0 0 0-.775l-6.311-6.385ZM13.367 14.69a.557.557 0 0 0 .401.235.545.545 0 0 0 .437-.157.563.563 0 0 0 .1-.67.561.561 0 0 0-.156-.183l-6.28-6.392a.556.556 0 0 0-.408-.225.546.546 0 0 0-.433.168.563.563 0 0 0-.083.673c.04.07.095.131.16.178l6.262 6.373Zm0 20.02-6.281 6.38a.557.557 0 0 0-.122.613.562.562 0 0 0 .405.335.545.545 0 0 0 .5-.157l6.26-6.381a.566.566 0 0 0 0-.775.55.55 0 0 0-.602-.123.55.55 0 0 0-.18.123l.02-.016Zm20.886-19.857a.515.515 0 0 0 .381-.163l6.297-6.373a.558.558 0 0 0 .231-.408.57.57 0 0 0-.155-.443.552.552 0 0 0-.66-.101.556.556 0 0 0-.18.158l-6.303 6.373a.565.565 0 0 0 .08.863.54.54 0 0 0 .309.094Zm-29.43 2.53 5.548 2.286a.55.55 0 0 0 .427-.005.573.573 0 0 0 .294-.742.561.561 0 0 0-.305-.303l-5.517-2.29a.554.554 0 0 0-.703.31.578.578 0 0 0 .256.732v.012Zm38.363 14.634-5.56-2.294a.558.558 0 0 0-.439 0 .553.553 0 0 0-.313.314.57.57 0 0 0 .144.625c.056.051.121.09.192.115l5.522 2.293a.523.523 0 0 0 .547-.092.563.563 0 0 0 .134-.692.557.557 0 0 0-.27-.254l.043-.015ZM17.862 11.354a.564.564 0 0 0 .511.345.49.49 0 0 0 .21-.046.54.54 0 0 0 .302-.302.557.557 0 0 0-.004-.43l-2.328-5.607a.546.546 0 0 0-.711-.262.558.558 0 0 0-.29.29.57.57 0 0 0-.014.414l2.324 5.598Zm12.3 26.683a.546.546 0 0 0-.706-.255.557.557 0 0 0-.288.285.57.57 0 0 0-.021.408l2.324 5.606a.556.556 0 0 0 .507.345.55.55 0 0 0 .514-.35.566.566 0 0 0-.006-.428l-2.324-5.61Zm-.9-26.45a.543.543 0 0 0 .717-.302l2.26-5.607a.57.57 0 0 0-.016-.417.557.557 0 0 0-.296-.292.546.546 0 0 0-.712.283l-2.259 5.618a.567.567 0 0 0 .125.61.548.548 0 0 0 .18.118v-.011ZM18.75 37.809a.546.546 0 0 0-.724.306L15.77 43.72a.566.566 0 0 0 .122.609.55.55 0 0 0 .179.12.494.494 0 0 0 .21.038.547.547 0 0 0 .515-.344l2.251-5.607a.565.565 0 0 0-.297-.728ZM36.851 19.2a.555.555 0 0 0 .508.345.588.588 0 0 0 .217-.043l5.518-2.367a.546.546 0 0 0 .313-.302.57.57 0 0 0-.124-.623.552.552 0 0 0-.185-.121.54.54 0 0 0-.431 0l-5.522 2.375a.558.558 0 0 0-.297.306.57.57 0 0 0 .003.43ZM11.158 30.196a.547.547 0 0 0-.515-.346.547.547 0 0 0-.214.043L4.91 32.257a.556.556 0 0 0-.284.254.57.57 0 0 0 .14.707.548.548 0 0 0 .358.124.452.452 0 0 0 .214-.043l5.521-2.36a.55.55 0 0 0 .3-.304.566.566 0 0 0-.002-.432v-.007Z"
          ></path>
          <path
            fill="currentColor"
            d="M30.721 25.434a6.812 6.812 0 0 1-2.13 4.422 6.614 6.614 0 0 1-4.517 1.79 6.614 6.614 0 0 1-4.517-1.79 6.812 6.812 0 0 1-2.13-4.422H16.32a7.942 7.942 0 0 0 2.454 5.22 7.71 7.71 0 0 0 5.3 2.12 7.709 7.709 0 0 0 5.3-2.12 7.942 7.942 0 0 0 2.454-5.22H30.72Zm-9.451-1.747-.356-.872h-1.63l-.354.872h-1.118l2.225-4.847h.148l2.229 4.847h-1.145Zm-1.168-2.879-.47 1.162h.935l-.465-1.162Zm9.001 2.879-.355-.872h-1.644l-.355.872H25.63l2.236-4.847h.149l2.224 4.847h-1.137Zm-1.167-2.879-.474 1.162h.94l-.466-1.162Z"
          ></path>
        </svg>
      </div>
      <nav className="akind_navbar_right_container">
        <a href="#" className="akind_navbar_link"><span className="akind_navbar_link_text">Journal</span><span className="akind_navbar_link_underline"></span></a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
          className="nav_svg"
        >
          <path
            fill="currentColor"
            d="M9.38 13.178a4.319 4.319 0 1 1-.003-8.637 4.319 4.319 0 0 1 .003 8.637Zm0-8.172a3.852 3.852 0 1 0 3.85 3.852 3.856 3.856 0 0 0-3.85-3.85v-.002Zm0-1.121a.198.198 0 0 0 .196-.197V.52a.197.197 0 1 0-.394 0v3.168a.2.2 0 0 0 .058.136.199.199 0 0 0 .14.061Zm0 9.951a.198.198 0 0 0-.198.198v3.168a.197.197 0 1 0 .394 0v-3.168a.195.195 0 0 0-.196-.198Zm8.34-5.173h-3.169a.197.197 0 0 0 0 .394h3.17a.197.197 0 0 0 0-.394ZM4.403 8.86a.2.2 0 0 0-.057-.136.197.197 0 0 0-.136-.057H1.038a.197.197 0 0 0 0 .394h3.169a.195.195 0 0 0 .196-.196V8.86Zm8.773 3.52a.197.197 0 0 0-.137-.07.202.202 0 0 0-.19.126.195.195 0 0 0-.014.079.2.2 0 0 0 .068.136l2.24 2.246a.199.199 0 0 0 .285 0 .198.198 0 0 0 0-.272l-2.252-2.245ZM5.584 5.343a.197.197 0 1 0 .28-.273L3.621 2.823a.197.197 0 1 0-.273.279l2.235 2.24Zm0 7.037-2.242 2.243a.195.195 0 0 0 .014.293.198.198 0 0 0 .265-.015l2.235-2.243a.197.197 0 0 0 0-.272.196.196 0 0 0-.279 0l.007-.006Zm7.453-6.98a.187.187 0 0 0 .136-.057l2.247-2.241a.197.197 0 0 0-.208-.335.198.198 0 0 0-.064.056l-2.25 2.24a.198.198 0 0 0 .029.304c.032.022.07.033.11.033Zm-10.503.89 1.98.803a.199.199 0 1 0 .149-.37l-1.97-.804a.2.2 0 0 0-.159.366v.004Zm13.692 5.144-1.985-.807a.201.201 0 0 0-.156 0 .2.2 0 0 0-.112.11.198.198 0 0 0 .12.26l1.97.807a.19.19 0 0 0 .196-.032.198.198 0 0 0-.048-.333l.015-.005ZM7.189 4.17a.199.199 0 0 0 .182.121.177.177 0 0 0 .075-.016.193.193 0 0 0 .107-.258l-.831-1.97a.198.198 0 0 0-.363.155l.83 1.968Zm4.388 9.38a.197.197 0 0 0-.362.154l.83 1.971a.197.197 0 1 0 .362-.153l-.83-1.972Zm-.321-9.299a.196.196 0 0 0 .256-.106l.806-1.97a.197.197 0 0 0-.258-.251.197.197 0 0 0-.107.1L11.147 4a.195.195 0 0 0 .109.257V4.25Zm-3.75 9.219a.196.196 0 0 0-.259.107l-.805 1.971a.196.196 0 0 0 .108.256c.024.01.05.015.075.014a.197.197 0 0 0 .184-.121l.803-1.971a.196.196 0 0 0-.106-.256Zm6.459-6.542a.196.196 0 0 0 .259.106l1.97-.832a.194.194 0 0 0 .127-.183.198.198 0 0 0-.127-.185.195.195 0 0 0-.153 0l-1.971.835a.197.197 0 0 0-.105.259Zm-9.169 3.865a.19.19 0 0 0-.108-.106.198.198 0 0 0-.153 0l-1.969.831a.198.198 0 0 0 .076.381.163.163 0 0 0 .077-.015l1.97-.83a.197.197 0 0 0 .107-.258v-.003Z"
          ></path>
        </svg>
        <a href="#" className="akind_navbar_link"><span className="akind_navbar_link_text">Instagram</span><span className="akind_navbar_link_underline"></span></a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
          className="nav_svg"
        >
          <path
            fill="currentColor"
            d="M9.38 13.178a4.319 4.319 0 1 1-.003-8.637 4.319 4.319 0 0 1 .003 8.637Zm0-8.172a3.852 3.852 0 1 0 3.85 3.852 3.856 3.856 0 0 0-3.85-3.85v-.002Zm0-1.121a.198.198 0 0 0 .196-.197V.52a.197.197 0 1 0-.394 0v3.168a.2.2 0 0 0 .058.136.199.199 0 0 0 .14.061Zm0 9.951a.198.198 0 0 0-.198.198v3.168a.197.197 0 1 0 .394 0v-3.168a.195.195 0 0 0-.196-.198Zm8.34-5.173h-3.169a.197.197 0 0 0 0 .394h3.17a.197.197 0 0 0 0-.394ZM4.403 8.86a.2.2 0 0 0-.057-.136.197.197 0 0 0-.136-.057H1.038a.197.197 0 0 0 0 .394h3.169a.195.195 0 0 0 .196-.196V8.86Zm8.773 3.52a.197.197 0 0 0-.137-.07.202.202 0 0 0-.19.126.195.195 0 0 0-.014.079.2.2 0 0 0 .068.136l2.24 2.246a.199.199 0 0 0 .285 0 .198.198 0 0 0 0-.272l-2.252-2.245ZM5.584 5.343a.197.197 0 1 0 .28-.273L3.621 2.823a.197.197 0 1 0-.273.279l2.235 2.24Zm0 7.037-2.242 2.243a.195.195 0 0 0 .014.293.198.198 0 0 0 .265-.015l2.235-2.243a.197.197 0 0 0 0-.272.196.196 0 0 0-.279 0l.007-.006Zm7.453-6.98a.187.187 0 0 0 .136-.057l2.247-2.241a.197.197 0 0 0-.208-.335.198.198 0 0 0-.064.056l-2.25 2.24a.198.198 0 0 0 .029.304c.032.022.07.033.11.033Zm-10.503.89 1.98.803a.199.199 0 1 0 .149-.37l-1.97-.804a.2.2 0 0 0-.159.366v.004Zm13.692 5.144-1.985-.807a.201.201 0 0 0-.156 0 .2.2 0 0 0-.112.11.198.198 0 0 0 .12.26l1.97.807a.19.19 0 0 0 .196-.032.198.198 0 0 0-.048-.333l.015-.005ZM7.189 4.17a.199.199 0 0 0 .182.121.177.177 0 0 0 .075-.016.193.193 0 0 0 .107-.258l-.831-1.97a.198.198 0 0 0-.363.155l.83 1.968Zm4.388 9.38a.197.197 0 0 0-.362.154l.83 1.971a.197.197 0 1 0 .362-.153l-.83-1.972Zm-.321-9.299a.196.196 0 0 0 .256-.106l.806-1.97a.197.197 0 0 0-.258-.251.197.197 0 0 0-.107.1L11.147 4a.195.195 0 0 0 .109.257V4.25Zm-3.75 9.219a.196.196 0 0 0-.259.107l-.805 1.971a.196.196 0 0 0 .108.256c.024.01.05.015.075.014a.197.197 0 0 0 .184-.121l.803-1.971a.196.196 0 0 0-.106-.256Zm6.459-6.542a.196.196 0 0 0 .259.106l1.97-.832a.194.194 0 0 0 .127-.183.198.198 0 0 0-.127-.185.195.195 0 0 0-.153 0l-1.971.835a.197.197 0 0 0-.105.259Zm-9.169 3.865a.19.19 0 0 0-.108-.106.198.198 0 0 0-.153 0l-1.969.831a.198.198 0 0 0 .076.381.163.163 0 0 0 .077-.015l1.97-.83a.197.197 0 0 0 .107-.258v-.003Z"
          ></path>
        </svg>
        <a href="#" className="akind_navbar_link"><span className="akind_navbar_link_text">Contact</span><span className="akind_navbar_link_underline"></span></a>
      </nav>
    </header>
  );
};
