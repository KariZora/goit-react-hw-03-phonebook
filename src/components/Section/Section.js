const Section = ({ title, children }) => {
  return (
    <div>
      <h2
        style={{
          backgroundColor: "silver",
          textAlign: "center",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Section;
