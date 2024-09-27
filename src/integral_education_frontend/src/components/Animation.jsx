const Animation = () => {
    return (
      <div className="wrapper ">
        <div className="content__wrapper">
          <div className="ellipses-container">
            <h2 className="greeting">
              <span>I</span>
              <span>F</span>
              <span>O</span>
              <span>R</span>
              <span>C</span>
              <span>e</span>
            </h2>
  
            <div className="ellipses ellipses__outer--thin">
              <div className="ellipses ellipses__orbit"></div>
            </div>
  
            <div className="ellipses ellipses__outer--thick"></div>
          </div>
        </div>
      </div>
    );
  };
  export default Animation;