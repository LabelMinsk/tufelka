import { Button, ButtonProps } from "./ui/button";

interface BuyButtonProps extends Omit<ButtonProps, 'onClick'> {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function BuyButton({ onClick, className, children, ...props }: BuyButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Переход на внешний сайт банка эквайера
      window.location.href = "https://securepayments.sberbank.ru/payment";
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      variant="default"
      {...props}
    >
      {children || "Купить"}
    </Button>
  );
}

