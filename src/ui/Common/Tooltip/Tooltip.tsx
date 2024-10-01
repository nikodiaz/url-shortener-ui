
import { ReactNode, useState } from 'react';

const Tooltip = ({ text, children }: { text: string, children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="relative flex items-center">
      <div
        className="cursor-pointer"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        {children}
      </div>

      {isVisible && (
        <div
          className={`tooltip ${isVisible ? 'tooltip-visible z-50' : ''} `}>
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip
