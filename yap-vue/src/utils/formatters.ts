import format from 'date-fns/format'

export const formatCurrentTime = () => format(new Date(), 'yyyy.MM.dd h:mm:ss a');
