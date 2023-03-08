import React from 'react'
import './ConstructorPanel.scss'

const ConstructorPanel = () => (
  <div>
    <div className="form_toggle">
      <div className="form_toggle-item item-1">
        <input id="fid-1" type="radio" name="control" value="Runtime" />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="fid-1">
          <i>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginBottom: '-5px' }}
            >
              <path
                d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z"
                stroke="#4D5562"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z"
                stroke="#4D5562"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          Runtime
        </label>
      </div>
      <div className="form_toggle-item item-2">
        <input id="fid-2" type="radio" name="control" value="Constructor" defaultChecked />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="fid-2">
          <i>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.5 8.33334L1.16666 5.00001L4.5 1.66668M9.5 1.66668L12.8333 5.00001L9.5 8.33334"
                stroke="#4D5562"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          Constructor
        </label>
      </div>
    </div>

    <div className="constructor-panel">
      <div className="constructor-panel__inner-block">
        <i className="constructor-panel__inner-block-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7778 1V5.44444" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M21 3.22222L16.5556 3.22222" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M12.3889 3.22222H5C2.79086 3.22222 1 5.01309 1 7.22223V16.2778M18.7778 9.61111V17C18.7778 19.2091 16.9869 21 14.7778 21H5C2.79086 21 1 19.2091 1 17V16.2778M1 16.2778L4.83824 12.4395C6.40034 10.8774 8.93298 10.8774 10.4951 12.4395C11.8961 13.8406 13.5664 15.5108 14.8889 16.8333"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M18.7778 14.6111L18.2729 14.1062C16.7108 12.5441 14.1781 12.5441 12.616 14.1062L12.3889 14.3333"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12.1111" cy="7.66667" r="0.555556" fill="black" />
          </svg>
        </i>
        <p className="constructor-panel__inner-block-title">Перетащите сюда</p>
        <p className="constructor-panel__inner-block-subtitle">любой элемент из левой панели</p>
      </div>
    </div>
  </div>
)

export default ConstructorPanel
