type Props = {
  className?: string
}

const FacebookIcon = ({ className }: Props) => {
  return (
    <svg
      width="27"
      height="28"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`general-icon ${className}`}
    >
      <g clip-path="url(#clip0_610_3)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.3333 27.3337C20.6971 27.3337 26.6667 21.3641 26.6667 14.0003C26.6667 6.63653 20.6971 0.666992 13.3333 0.666992C5.96954 0.666992 0 6.63653 0 14.0003C0 21.3641 5.96954 27.3337 13.3333 27.3337Z"
          fill=""
          className="general-icon-bg"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.0296 12.5331C14.8214 12.4672 14.582 12.4233 14.3634 12.4233C14.0928 12.4233 13.5099 12.6099 13.5099 12.9721V13.8392H14.8943V15.299H13.5099V19.3272H12.1152V15.299H11.4282V13.8392H12.1152V13.1038C12.1152 11.9952 12.594 11.0732 13.7493 11.0732C14.1449 11.0732 14.8526 11.0952 15.2377 11.2379L15.0296 12.5331Z"
          fill=""
          className="general-icon-line"
        />
      </g>
      <defs>
        <clipPath id="clip0_610_3">
          <rect
            width="26.6667"
            height="26.6667"
            fill="white"
            transform="translate(0 0.666992)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default FacebookIcon
