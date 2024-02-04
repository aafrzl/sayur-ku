import IconProps from "@/types/icon";


const IconFungi: React.FC<IconProps> = ({
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
        d="M62.5954 55.1435C61.1601 58.784 57.1962 62.8588 53.3773 64.6202C51.8201 65.335 50.3558 65.0033 49.3989 64.5931C47.6909 63.8632 46.2585 62.334 45.5712 60.5032C43.6487 55.3969 41.0535 51.0899 37.4926 45.7996C37.2085 45.3773 36.7764 45.0938 36.2893 45.0063C36.1849 44.9882 36.0834 44.9792 35.979 44.9792C35.5962 44.9792 35.2193 45.1029 34.9032 45.3411C31.9687 47.5248 30.3449 50.1247 30.0752 53.0684C29.8896 55.0681 30.3652 57.1402 31.4642 59.2033C21.9879 57.1583 14.8169 47.9652 14.8169 36.9623C14.8169 24.8315 24.3048 14.9627 35.9645 14.9627C46.6238 14.9627 55.526 22.503 57.4166 32.4351C54.8387 30.9361 52.4059 30.3962 50.176 30.8456C47.6155 31.3523 45.4611 33.1379 43.9445 36.0123C43.553 36.7482 43.669 37.6651 44.2287 38.2713C47.5691 41.8937 52.113 44.6655 58.5243 46.9879C60.2206 47.6032 61.682 49.0087 62.436 50.746C63.0768 52.2269 63.1348 53.7893 62.5983 55.1466L62.5954 55.1435ZM65.8083 49.1626C64.631 46.439 62.4186 44.3187 59.7392 43.3475C54.5603 41.4714 50.7646 39.324 47.9345 36.6547C48.7725 35.5236 49.7555 34.845 50.8661 34.6248C52.8901 34.2146 55.526 35.3397 58.4576 37.8672C59.0085 38.3437 59.7798 38.4402 60.4265 38.1266C61.076 37.8099 61.4878 37.1312 61.4878 36.3832C61.4878 22.4457 50.0368 11.1111 35.9616 11.1111C22.2605 11.1111 11.1111 22.7081 11.1111 36.9623C11.1111 51.5815 22.0256 63.4771 35.4426 63.4771C36.182 63.4771 36.8518 63.0217 37.1447 62.3129C37.4347 61.6071 37.2955 60.7867 36.7909 60.2287C35.2744 58.5638 33.52 56.0333 33.7607 53.4364C33.8796 52.1365 34.5001 50.8938 35.6136 49.7356C38.4351 54.0276 40.5489 57.7103 42.1293 61.9117C43.1819 64.6986 45.3712 67.0331 47.9954 68.1581C49.1379 68.6467 50.3123 68.891 51.4722 68.891C52.6465 68.891 53.8006 68.6437 54.8793 68.143C59.5508 65.9895 64.2367 61.1396 66.0229 56.6094C66.9508 54.2628 66.8725 51.6207 65.8112 49.1656L65.8083 49.1626Z"
        fill={`var(--${fill})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.3366 52.5766C59.3971 52.1785 58.3097 52.64 57.9212 53.6262C57.1209 55.6501 54.2733 58.265 51.4084 59.6253C51.1504 59.5318 50.6342 59.1699 50.3935 58.5395C48.2825 52.9265 45.5133 48.3179 41.7321 42.7048L39.6472 39.6073C39.1166 38.8201 38.322 38.2953 37.4115 38.1324C36.4981 37.9786 35.5847 38.1897 34.8337 38.7507L31.8731 40.9555C27.915 43.9053 26.123 47.232 25.3603 50.034C21.9967 46.7766 19.9901 41.9991 19.9901 36.9591C19.9901 35.8944 19.1637 35.0348 18.1401 35.0348C17.1194 35.0348 16.29 35.8974 16.29 36.9591C16.29 44.3878 19.9031 51.3581 25.7141 55.1524C26.2766 55.5204 26.9842 55.5445 27.5641 55.2218C28.1499 54.899 28.5239 54.2747 28.5442 53.587C28.5529 53.3548 28.5674 53.1316 28.5877 52.9174C28.8052 50.5739 29.9245 47.1416 34.0276 44.0832L36.7678 42.0413L38.699 44.9127C42.3265 50.2934 44.9682 54.6849 46.9458 59.942C47.7084 61.9688 49.6512 63.495 51.4664 63.495C51.913 63.495 52.3508 63.3985 52.7684 63.2055C55.9291 61.7487 59.9597 58.5847 61.3399 55.086C61.7285 54.1028 61.2761 52.9778 60.3308 52.5736L60.3366 52.5766Z"
        fill={`var(--${fill})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.1228 36.0211C40.407 36.184 40.7114 36.2594 41.013 36.2594C41.6654 36.2594 42.3005 35.8974 42.6369 35.261C44.7217 31.319 47.9433 29.1474 51.7506 29.1474C51.7506 29.1474 51.7506 29.1474 51.7535 29.1474C52.7742 29.1835 53.6384 28.2968 53.6384 27.2231C53.6384 26.1584 52.7365 25.2958 51.7129 25.2958C46.5341 25.2958 42.1613 28.1762 39.395 33.4061C38.902 34.3381 39.2297 35.5084 40.1257 36.0181L40.1228 36.0211Z"
        fill={`var(--${fill})`}
      />
    </svg>
  );
};

export default IconFungi;
