export const formatDate = ({ date }: { date: string }) => {
  if (!date) return '';
  const _date = new Date(date);
  const newDate = new Intl.DateTimeFormat(['ban', 'id']).format(_date);

  return newDate;
};

export const formatISODate = ({ date }: { date?: string }) => {
  if (!date) return '';
  const _date = new Date(date);
  const newDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(_date);

  return newDate;
};

export const convertParams = (url: string, params: any) => {
  const paramsData = new URLSearchParams();
  for (let propertyName in params) {
    if (params[propertyName] != undefined && params[propertyName] != '')
      paramsData.set(propertyName, params[propertyName] || '');
  }
  return (url += '?' + paramsData.toString());
};
