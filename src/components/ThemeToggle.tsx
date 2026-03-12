import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </motion.div>
    </Button>
  )
}
