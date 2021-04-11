export const calculateChatDate = (d) => {
    if (d === null) return '';

    const today = new Date();
    const target = new Date(d);
    const diffM = Math.floor((today.getTime() - target.getTime()) / 1000 / 60);
    if (diffM < 1) return '방금전';
    if (diffM < 60) return `${diffM}분 전`;

    const diffH = Math.floor(diffM / 60);
    if (diffH < 24) return `${diffH}시간 전`;

    const diffD = Math.floor(diffH / 24);
    if (diffD < 365) return `${diffD}일 전`;

    return `${Math.floor(diffD / 365)}년 전`;
};
