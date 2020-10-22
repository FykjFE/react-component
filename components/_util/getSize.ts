export default function getSize(size: string | undefined): string {
  switch (size) {
    case 'large':
      return 'lg';
    case 'small':
      return 'sm';
    default:
      return 'md';
  }
}
