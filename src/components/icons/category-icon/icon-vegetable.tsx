import IconProps from "@/types/icon";


const IconVegetable: React.FC<IconProps> = ({
  className = "",
  fill = "primary",
}: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.9639 57.9378C57.9141 59.9384 55.0776 61.0625 51.7867 61.247C52.8837 59.6767 53.3674 58.4454 53.4258 58.2996C53.4568 58.2118 53.4458 58.1222 53.4641 58.0326C53.9441 57.7323 54.4096 57.4126 54.8586 57.0788C54.8787 57.0613 54.8988 57.0543 54.917 57.0367C56.8372 55.6087 58.4982 53.8838 59.8216 51.9183C59.9128 51.9008 60.0078 51.9043 60.1045 51.8709C60.256 51.8182 61.5684 51.3369 63.2294 50.2532C63.0779 53.313 61.9718 55.974 59.9658 57.936L59.9639 57.9378ZM24.3106 60.8149C24.0386 59.898 23.0877 59.3271 22.1111 59.4905C22.0801 59.4958 18.4496 60.0438 16.3012 58.3049C15.1513 57.3722 14.5909 55.9143 14.5909 53.8522C14.5909 48.2455 19.0939 46.8 21.3409 46.4241C21.799 47.9645 22.4306 49.4312 23.2319 50.803L18.0882 52.0395C17.046 52.2889 16.4126 53.3042 16.6754 54.3054C16.8945 55.1555 17.6866 55.7211 18.5573 55.7211C18.7124 55.7211 18.8712 55.7018 19.03 55.6649L25.6084 54.0823C27.3242 56.0197 29.3959 57.655 31.7413 58.874L29.6058 59.559C28.5872 59.8839 28.0378 60.9431 28.3773 61.9232C28.6493 62.7066 29.405 63.2019 30.2191 63.2019C30.4235 63.2019 30.6297 63.1703 30.8342 63.1053L36.6641 61.2347C36.9215 61.1539 37.1478 61.0204 37.3377 60.857C37.8926 60.9712 38.4566 61.0555 39.0224 61.1293C39.1593 61.1697 39.2834 61.2294 39.4185 61.2663C39.5901 61.312 39.7653 61.333 39.9351 61.333C40.0902 61.333 40.2399 61.2961 40.3896 61.2628C40.8842 61.2944 41.3734 61.3348 41.8772 61.3348C43.7864 61.3348 45.6263 61.0713 47.3841 60.6199C45.358 62.7962 41.8534 65.1534 36.1275 65.1534C25.9935 65.1534 24.3617 60.9501 24.3106 60.8166V60.8149ZM14.0032 30.5912C15.9599 26.4442 19.7383 23.9886 24.3672 23.8499C25.4405 23.8182 26.2837 22.9558 26.2509 21.923C26.218 20.8902 25.3054 20.0594 24.2467 20.1121C23.6699 20.1279 23.1114 20.1999 22.5547 20.2737C23.1588 17.2789 25.3236 14.8883 28.7296 13.592C33.1614 11.9058 40.0008 12.236 45.1773 16.6852C44.5439 17.9042 44.1515 19.1566 43.9416 20.2895C43.2626 20.2262 42.5763 20.1911 41.8772 20.1911C30.0712 20.1911 20.4994 29.4003 20.4994 40.7612C20.4994 41.4304 20.5396 42.0909 20.6053 42.7443C19.0629 43.0112 17.3051 43.5839 15.7007 44.5745C12.5594 40.5258 11.8676 35.1194 14.0032 30.5912ZM24.3873 40.7594C24.3873 31.4782 32.2323 23.9289 41.8772 23.9289C44.7794 23.9289 47.5155 24.6227 49.9249 25.8312C49.182 25.7925 48.4555 25.7995 47.7728 25.8961C45.546 26.2035 43.8174 27.2065 42.8154 28.7083C39.6978 27.3242 36.4415 27.3171 33.6214 28.7399C30.4509 30.3365 28.3135 33.5667 28.3043 36.781C28.2934 40.4591 30.0803 43.3011 32.3601 44.9293C30.6991 46.6946 29.9453 48.9376 30.2483 51.3931C30.3541 52.238 30.606 53.0618 30.9327 53.8663C26.95 50.7784 24.3873 46.0535 24.3873 40.7577V40.7594ZM49.5251 43.2677C49.5324 43.2501 49.5452 43.2378 49.5507 43.222L51.4946 37.6118C51.8359 36.6335 51.2847 35.5743 50.268 35.2476C49.2404 34.9139 48.1507 35.4514 47.8094 36.4297L46.5499 40.0691C45.1426 38.7395 43.8047 37.7295 42.7478 37.2201C41.7859 36.7582 40.6195 37.1323 40.1395 38.0562C39.6594 38.9801 40.0482 40.1043 41.0083 40.5645C42.6383 41.3496 45.3069 43.9404 47.5556 46.944L43.206 48.3404C42.1875 48.6653 41.6381 49.7245 41.9776 50.7046C42.2495 51.488 43.0052 51.9833 43.8211 51.9833C44.0255 51.9833 44.2318 51.9517 44.4362 51.8867L49.704 50.197C50.6203 51.8147 51.2957 53.4113 51.5129 54.7954C48.7476 56.5589 45.4383 57.5935 41.879 57.5935C41.2255 57.5935 40.5849 57.5531 39.9515 57.4846C36.9708 56.4764 34.4501 53.7152 34.1106 50.9575C33.8569 48.9165 34.8151 47.3076 36.9598 46.1676C37.6772 45.7882 38.0678 45.0154 37.94 44.2355C37.8123 43.4574 37.188 42.8409 36.3831 42.6951C34.3442 42.3227 32.1849 40.1289 32.194 36.7933C32.1995 34.9613 33.5265 33.0116 35.4266 32.0561C37.6078 30.9601 40.1961 31.2762 42.7223 32.9519C43.2808 33.319 43.9927 33.384 44.6133 33.1223C45.2302 32.8588 45.6628 32.3055 45.7504 31.6609C45.8107 31.2323 45.9932 29.9255 48.3332 29.6023C51.5275 29.1544 56.171 30.9653 57.5965 34.0444C57.7298 34.336 57.9488 34.5573 58.1934 34.74C58.9436 36.6142 59.3707 38.6394 59.3707 40.7647C59.3707 45.1278 57.6239 49.0939 54.7838 52.087C53.7653 49.1203 51.7483 45.9533 49.5269 43.273L49.5251 43.2677ZM55.481 14.5001C57.5892 14.5001 59.1426 15.0499 60.0972 16.1337C61.9243 18.2045 61.3457 21.7105 61.3402 21.7386C61.1778 22.6414 61.7728 23.5425 62.669 23.8411C62.857 23.9025 67.2231 25.4746 67.2231 35.2283C67.2231 40.7349 64.7718 44.109 62.512 46.0587C62.983 44.3637 63.2549 42.595 63.2549 40.7594C63.2549 39.2524 63.0761 37.7875 62.7566 36.3735C62.9264 36.1891 63.0706 35.9853 63.1545 35.7394L65.0985 30.1293C65.438 29.1509 64.8886 28.0917 63.8719 27.765C62.8442 27.4348 61.7527 27.9688 61.4132 28.9471L60.6995 31.0022C59.4164 28.7135 57.6915 26.6918 55.6398 25.0285L57.2862 18.6928C57.5491 17.6899 56.9157 16.6747 55.8716 16.4252C54.8258 16.1688 53.7744 16.7853 53.5189 17.7847L52.2247 22.7608C50.8284 22.0143 49.3316 21.4259 47.7637 20.9956C48.1525 18.8316 49.6547 14.4984 55.481 14.4984V14.5001ZM71.1091 35.2283C71.1091 25.991 67.4494 22.3323 65.3047 20.9815C65.3704 19.2057 65.1423 16.095 63.0815 13.7378C61.3548 11.7618 58.7958 10.7588 55.481 10.7588C51.8524 10.7588 49.2787 11.9673 47.468 13.6518C41.1014 8.35072 32.9333 7.9643 27.2986 10.1125C22.0144 12.1254 18.7946 16.3023 18.5281 21.3434C15.0254 22.7889 12.1633 25.4447 10.4658 29.0438C7.68953 34.9262 8.64051 41.9714 12.835 47.1319C11.561 48.79 10.7049 50.9751 10.7049 53.8487C10.7049 57.0402 11.7453 59.501 13.7988 61.1627C16.2465 63.144 19.4626 63.3582 21.3263 63.302C22.7299 65.3677 26.5302 68.8894 36.1293 68.8894C41.7677 68.8894 45.703 67.0328 48.388 64.8758C49.2239 64.9637 50.0472 65.0251 50.8485 65.0251C55.5979 65.0251 59.7394 63.4865 62.7366 60.5602C66.1863 57.1878 67.6484 52.3978 66.9511 47.0125C69.1853 44.4287 71.1091 40.6453 71.111 35.2283H71.1091Z"
        fill={`var(--${fill})`}
      />
    </svg>
  );
};

export default IconVegetable;