import React from 'react'
import PropTypes from 'prop-types'

const IconLogo = (props) => {
  const { className, format, ...rest } = props

  if (format === 'desktop') {
    return (
      <svg
        className={className}
        {...rest}
        width="141"
        height="26"
        viewBox="0 0 141 26"
        xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <g fillRule="nonzero">
            <path
              d="M46.2 11.712l-2.184 5.664-2.472-6.48c-.288-.768-.36-1.032-.36-1.392 0-.648.408-.912 1.44-.936v-.576h-6.408v.552c1.128.096 1.344.36 2.16 2.28l4.2 10.032-.36.96c-.456 1.104-.792 1.416-1.536 1.416l-.141696-.003456c-.11904-.00624-.24768-.02208-.43992-.05652L39.672 23.088c-.48-.096-.744-.12-.96-.12-.624 0-.96.432-.96 1.248 0 1.104.6 1.656 1.752 1.656 1.488 0 2.352-.888 3.336-3.36l4.08-10.368c1.08-2.712 1.68-3.408 3.024-3.6v-.552h-5.232v.552c1.344.072 1.896.504 1.896 1.488 0 .456-.096.888-.408 1.68zm4.468 2.64c0 1.848.6 3.552 1.656 4.728 1.008 1.128 2.712 1.824 4.512 1.824 1.896 0 3.648-.72 4.752-1.944.984-1.104 1.584-2.88 1.584-4.752 0-3.984-2.448-6.576-6.216-6.576-1.824 0-3.456.624-4.488 1.704-1.128 1.2-1.8 3.048-1.8 5.016zm3.24-.12c0-1.9575.2109375-3.42984375.6723633-4.45658203L54.676 9.576c.408-.888 1.248-1.392 2.232-1.392 2.088 0 3.048 1.92 3.048 6.12 0 4.176-.936 6.048-3.024 6.048-2.064 0-3.024-1.968-3.024-6.12zm17.731657 4.344918L70.256 18.576l-.4964338-.0026951C67.56576 18.54752 67.064 18.328 67.064 17.544c0-.528.288-.864 1.104-1.296.768.192 1.44.264 2.136.264 1.416 0 2.712-.384 3.624-1.104.912-.72 1.44-1.92 1.44-3.264 0-1.32-.408-2.232-1.416-3.216h2.352V7.872l-2.568.096c-.6 0-.888-.024-1.656-.144l-.5241152-.08230453C70.9991111 7.66103704 70.6133333 7.632 70.184 7.632 67.04 7.632 65 9.456 65 12.264c0 1.128.36 2.136.984 2.736l.1463333.1393333C66.382 15.366 66.692 15.576 67.352 15.936l-1.224.768c-.984.624-1.224.984-1.224 1.704 0 .6.24 1.152.648 1.584.264.288.504.432 1.08.696l-.3962083.2268056C64.8896667 21.701 64.688 22.02 64.688 22.944c0 1.872 1.968 2.904 5.472 2.904 1.944 0 3.552-.36 4.704-1.056 1.056-.648 1.704-1.848 1.704-3.192 0-1.2-.528-2.088-1.44-2.52-.8664-.3648-1.6245-.49134-3.488343-.503082zM67.976 11.952c0-2.472.744-3.768 2.208-3.768 1.464 0 2.16 1.272 2.16 3.912 0 2.592-.696 3.864-2.16 3.864-1.44 0-2.208-1.416-2.208-4.008zm2.664 8.952c2.712 0 3.768.504 3.768 1.824 0 1.584-1.44 2.52-3.792 2.52-2.472 0-3.696-.96-3.696-2.856 0-.864.24-1.344.768-1.464l2.952-.024zm18.82-.456v-.576l-.3842164-.0113058c-1.0516003-.0535537-1.2210248-.332033-1.2443937-2.1367934l-.0018539-.9951328c.002304-.232128.008064-.557568.022464-.960768l.048-4.176c0-1.488-.288-2.352-.936-2.976-.72-.672-1.896-.984-3.552-.984-1.632 0-2.928.288-3.936.912-.936.576-1.488 1.392-1.488 2.232 0 .72.576 1.104 1.68 1.104.9487059 0 1.3659239-.2763737 1.4517435-1.02921067l.0490343-.56134489C81.2326667 9.66333333 81.316 9.34 81.516 9c.336-.576.84-.816 1.608-.816 1.392 0 1.84208.69522667 1.8705387 3.03956089L84.996 13.032c-1.488.072-2.76.24-3.936.456-2.568.504-3.84 1.776-3.84 3.84 0 2.16 1.416 3.528 3.696 3.528 1.56 0 2.856-.6 4.104-1.944l.036009.3724598C85.188 20.4384793 85.4498182 20.736 86.148 20.736l.2829653-.0062293C87.11376 20.7031467 88.2328 20.5936 89.46 20.448zm-4.464-6.864v1.848c0 1.368-.12 2.16-.432 2.784-.456.984-1.368 1.584-2.328 1.584-1.176 0-1.944-1.128-1.944-2.832 0-2.232 1.224-3.12 4.704-3.384z"
              fill="#000"
            />
            <path
              d="M94.888 8.76h2.904v-.768h-2.904l.0058776-1.55853061C94.9036735 5.36326531 94.9257143 4.78285714 94.96 4.08l-1.2.12c-.216 1.2-.456 1.896-.888 2.568-.552.864-1.224 1.224-2.28 1.272v.72h1.368l.001728 8.0108714c.012427 1.713484.0953155 2.2413025.358272 2.7891286.456.84 1.416 1.32 2.712 1.32 1.248 0 2.304-.384 3.288-1.2l-.336-.6c-.6.48-1.176.744-1.68.744s-.984-.36-1.176-.888c-.154-.44-.2273333-1.001-.2384861-1.9048333L94.888 8.76zm3.82-.768v.576l.3060683.0069331C100.4029844 8.62186889 100.508 8.89780645 100.508 10.896v6.648c0 2.136-.168 2.376-1.872 2.4v.576h6.672v-.576l-.3109938-.0077935c-1.3652263-.0531672-1.5493603-.3709749-1.5604358-2.1913593L103.436 12.336c0-1.536.048-3.216.144-4.656l-4.872.312zm1.56-4.104c0 .96.768 1.728 1.728 1.728s1.728-.768 1.728-1.728-.768-1.728-1.728-1.728-1.728.768-1.728 1.728zm10.588 3.792l-4.68.312v.576l.2985956.008448c1.26336.056448 1.464.388944 1.47672 2.099736L107.952 17.544c0 2.16-.168 2.376-1.824 2.4v.576h6.504v-.576l-.2892342-.0075131c-1.2703735-.0506408-1.4512367-.3501321-1.4621995-2.1894645L110.88 12.672c0-2.16 1.32-3.936 2.904-3.936 1.32 0 1.944 1.128 1.944 3.528v5.28c0 2.136-.168 2.376-1.752 2.4v.576h6.432v-.576l-.2935861-.0077935c-1.289344-.0531672-1.4708614-.3709749-1.4818467-2.1913593L118.632 12.48c0-.888.24-1.656.744-2.424.6-.912 1.272-1.32 2.136-1.32 1.416 0 1.992 1.008 1.992 3.552v5.256c0 2.136-.168 2.376-1.752 2.4v.576h6.504v-.576l-.30229-.0077935c-1.3272851-.0531672-1.5101108-.3709749-1.5211412-2.1913593L126.432 12.264c0-1.632-.192-2.52-.72-3.24-.648-.912-1.728-1.392-3.12-1.392-1.8 0-3.072.768-4.128 2.52-.432-1.704-1.56-2.52-3.408-2.52-1.8 0-3.216.84-4.176 2.424l-.024-2.376zm29.884 6.072c-.048-1.512-.168-2.232-.432-2.952-.792-2.064-2.52-3.168-4.968-3.168-3.648 0-6.024 2.64-6.024 6.672 0 4.008 2.448 6.576 6.264 6.576 2.472 0 4.08-1.008 5.28-3.288l-.6-.384c-.888 1.752-2.304 2.736-3.96 2.736-1.464 0-2.568-.792-3.264-2.376-.432-1.008-.6-2.04-.624-3.816h8.328zm-8.304-.696c.096-1.248.24-2.016.504-2.76.504-1.392 1.296-2.112 2.328-2.112.936 0 1.608.6 2.064 1.872.264.744.36 1.488.408 3h-5.304z"
              fill="#0095B3"
            />
          </g>
          <g strokeWidth="1.5" stroke="#0095B3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.0221667 14.9028333c-2.123449-1.7178872-3.3997596-4.2705084-3.5-6.99999997C10.5891066 5.44596767 11.6329727 3.11721418 13.4225 1.4325c.3334333-.32683002.8670667-.32683002 1.2005 0 1.7886677 1.68521534 2.8320183 4.01375565 2.8991667 6.47033333-.1002404 2.72949157-1.376551 5.28211277-3.5 6.99999997z" />
            <path d="M17.43 6.67783333C19.1014265 5.54101183 21.0786397 4.93849069 23.1 4.95c.4796887.00063444.8689352.3883177.8715.868.0697835 2.45026057-.8386379 4.82752063-2.5246667 6.6068333-2.0009973 1.8590387-4.7084726 2.7613887-7.4246666 2.4745M10.6166667 6.69066667C8.9359545 5.53533534 6.93938056 4.92739894 4.9 4.95c-.48033591-.0000107-.87062682.38767479-.87383333.868-.07166144 2.4509653.835542 4.82959311 2.52116666 6.6103333 2.01953017 1.8618845 4.74324717 2.7635551 7.47483337 2.4745M22.75 16.0625c0 2.4161667-3.9176667 4.375-8.75 4.375-4.83233333 0-8.75-1.9541667-8.75-4.375" />
            <path d="M26.0283333 12.559c.701412 1.0334801 1.0821012 2.2510363 1.0943334 3.5 0 4.8323333-5.8765 8.75-13.125 8.75-7.24850003 0-13.12500003-3.9141667-13.12500003-8.7465.01168117-1.248701.39154021-2.4661979 1.092-3.5" />
          </g>
        </g>
      </svg>
    )
  }

  return (
    <svg className={className} {...rest} width="28" height="26" viewBox="0 0 28 26" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#0095B3" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.0221667 14.9028333c-2.123449-1.7178872-3.3997596-4.2705084-3.5-6.99999997C10.5891066 5.44596767 11.6329727 3.11721418 13.4225 1.4325c.3334333-.32683002.8670667-.32683002 1.2005 0 1.7886677 1.68521534 2.8320183 4.01375565 2.8991667 6.47033333-.1002404 2.72949157-1.376551 5.28211277-3.5 6.99999997z" />
        <path d="M17.43 6.67783333C19.1014265 5.54101183 21.0786397 4.93849069 23.1 4.95c.4796887.00063444.8689352.3883177.8715.868.0697835 2.45026057-.8386379 4.82752063-2.5246667 6.6068333-2.0009973 1.8590387-4.7084726 2.7613887-7.4246666 2.4745M10.6166667 6.69066667C8.9359545 5.53533534 6.93938056 4.92739894 4.9 4.95c-.48033591-.0000107-.87062682.38767479-.87383333.868-.07166144 2.4509653.835542 4.82959311 2.52116666 6.6103333 2.01953017 1.8618845 4.74324717 2.7635551 7.47483337 2.4745M22.75 16.0625c0 2.4161667-3.9176667 4.375-8.75 4.375-4.83233333 0-8.75-1.9541667-8.75-4.375" />
        <path d="M26.0283333 12.559c.701412 1.0334801 1.0821012 2.2510363 1.0943334 3.5 0 4.8323333-5.8765 8.75-13.125 8.75-7.24850003 0-13.12500003-3.9141667-13.12500003-8.7465.01168117-1.248701.39154021-2.4661979 1.092-3.5" />
      </g>
    </svg>
  )
}

const { string } = PropTypes

IconLogo.defaultProps = {
  className: null
}

IconLogo.propTypes = {
  className: string
}

export default IconLogo
