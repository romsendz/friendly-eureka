const CompanyName = () => {
  const date = new Date();
  return <span>{`© ${date.getFullYear()} Santecnica Iberica 2021 SL`}</span>;
};

export default CompanyName;
