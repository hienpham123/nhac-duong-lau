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

export const getRandomTwo = (array: string[]) => {
  const copyArray: string[] = [...array];
  const result: string[] = [];

  for (let i = 0; i < 2; i++) {
    const randomIndex: number = Math.floor(Math.random() * copyArray.length);
    result.push(copyArray[randomIndex]);
    copyArray.splice(randomIndex, 1);
  }

  return result;
}

export  const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `00:0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
