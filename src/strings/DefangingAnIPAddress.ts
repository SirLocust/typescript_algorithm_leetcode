export const defangIPaddr = (address: string): string => {
  let arrWithoutPoint = address.split('.');
  return arrWithoutPoint.join('[.]');
};
