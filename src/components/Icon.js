import React from 'react'

const icons = {
  github: <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm152.027 408.027c-19.76 19.76-42.756 35.267-68.354 46.094-6.502 2.75-13.105 5.165-19.8 7.247V423c0-20.167-6.917-35-20.75-44.5 8.667-.833 16.624-2 23.874-3.5s14.918-3.667 23-6.5c8.084-2.833 15.334-6.208 21.75-10.125 6.418-3.917 12.584-9 18.5-15.25 5.918-6.25 10.875-13.333 14.875-21.25s7.168-17.417 9.5-28.5c2.334-11.083 3.5-23.292 3.5-36.625 0-25.833-8.416-47.833-25.25-66 7.668-20 6.834-41.75-2.5-65.25l-6.25-.75c-4.332-.5-12.125 1.333-23.375 5.5s-23.875 11-37.875 20.5c-19.832-5.5-40.416-8.25-61.75-8.25-21.5 0-42 2.75-61.5 8.25-8.832-6-17.207-10.958-25.124-14.875s-14.25-6.583-19-8-9.167-2.292-13.25-2.625-6.708-.417-7.875-.25-2 .333-2.5.5c-9.333 23.667-10.167 45.417-2.5 65.25-16.833 18.167-25.25 40.167-25.25 66 0 13.333 1.167 25.542 3.5 36.625s5.5 20.583 9.5 28.5 8.958 15 14.875 21.25 12.083 11.333 18.5 15.25 13.667 7.292 21.75 10.125 15.75 5 23 6.5 15.208 2.667 23.875 3.5c-13.667 9.333-20.5 24.167-20.5 44.5v39.115c-7.55-2.247-14.99-4.902-22.3-7.994-25.597-10.826-48.594-26.334-68.353-46.093-19.758-19.758-35.267-42.756-46.093-68.354C46.68 313.195 41 285.043 41 256s5.68-57.195 16.88-83.675c10.826-25.597 26.334-48.594 46.092-68.353 19.758-19.76 42.756-35.267 68.353-46.093C198.805 46.68 226.957 41 256 41s57.195 5.68 83.676 16.88c25.598 10.826 48.594 26.334 68.354 46.092 19.758 19.758 35.266 42.756 46.092 68.353C465.32 198.805 471 226.957 471 256s-5.68 57.195-16.88 83.675c-10.825 25.596-26.335 48.595-46.093 68.352z"/></svg>
}

export default class Icon extends React.Component {
  render() {
    return (
      <span className="icon">
        {icons[this.props.name]}
      </span>
    );
  }
}