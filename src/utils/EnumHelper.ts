//Im a cop out I know
// eslint-disable-next-line
const getMemberNamesOnly = (enumType: any): string[] => {
    return Object.keys(enumType).filter((k) => !(parseInt(k) >= 0));
};
export default { getMemberNamesOnly };
