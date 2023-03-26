const formatDate = () => {
  var date = new Date();
  var formattedDate = date.toLocaleString();
  return formattedDate;
};

module.exports = formatDate;