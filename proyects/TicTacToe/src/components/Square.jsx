// eslint-disable-next-line react/prop-types
export const Square =({ children, isSelect, change, index }) =>{
    const className = `square ${isSelect ? "is-selected" : ""}`;
  
    const handleOnClick = () => {
      change(index);
    };
  
    return (
      <div onClick={handleOnClick} className={className}>
        {children}
      </div>
    );
  }