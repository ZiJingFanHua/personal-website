import { site } from '@/config.json'
import { AnimatePresence, motion } from 'framer-motion'
import { useHeaderMetaInfo, useShouldHeaderMetaShow } from '../../hook/headerHook'
import '../../assets/css/headerMeta.css'
export function HeaderMeta() {
  const { title, description, slug } = useHeaderMetaInfo()
  const shouldShow = useShouldHeaderMetaShow()
  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="header-meta"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
        >
          <div className="meta-content">
            <div className="meta-description">{description}</div>
            <h2 className="meta-title">{title}</h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
