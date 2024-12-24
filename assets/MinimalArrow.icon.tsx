interface MinimalArrowProps {
  className?: string;
}

export const MinimalArrowIcon = ({ className }: MinimalArrowProps = {}) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.2938 16.7066C10.1065 16.5191 10.0013 16.265 10.0013 16C10.0013 15.735 10.1065 15.4808 10.2938 15.2933L20.2938 5.29329C20.4833 5.11665 20.7341 5.02049 20.9931 5.02506C21.2522 5.02963 21.4994 5.13458 21.6826 5.3178C21.8658 5.50101 21.9708 5.74819 21.9753 6.00726C21.9799 6.26633 21.8838 6.51706 21.7071 6.70662L12.4138 16L21.7071 25.2933C21.8054 25.3848 21.8842 25.4952 21.9388 25.6179C21.9935 25.7406 22.0229 25.873 22.0252 26.0073C22.0276 26.1415 22.0029 26.2749 21.9526 26.3994C21.9023 26.5239 21.8275 26.6371 21.7325 26.732C21.6375 26.827 21.5244 26.9018 21.3999 26.9521C21.2754 27.0024 21.142 27.0271 21.0077 27.0247C20.8735 27.0224 20.7411 26.993 20.6184 26.9383C20.4957 26.8837 20.3853 26.8049 20.2938 26.7066L10.2938 16.7066Z" fill="#D2BDFF"/>
  </svg>
);