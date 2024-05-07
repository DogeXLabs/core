const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`pt-20 pb-12 lg:pt-32 lg:pb-24 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper