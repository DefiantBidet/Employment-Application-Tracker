import styles from 'Styles/components/loadingOverlay.scss';

/**
 * LoadingOverlay renders an overlay to indicate background processes
 * @param {LoadingOverlayProps} props  Props of the Component
 * @return {JSX.Element}
 * @function
 */
export default function LoadingOverlay(): JSX.Element {
  return (
    <div className={styles.overlayBase}>
      <svg className={styles.spinner} role="img" aria-label="loading">
        <use href="#loading-icon"></use>
      </svg>
    </div>
  );
}
