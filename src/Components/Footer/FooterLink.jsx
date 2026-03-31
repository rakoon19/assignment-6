

const FooterLink = ({ item }) => {
    const header = item.header;
    const links = item.links;
    return (
        <div className='flex flex-col gap-3'>
            <h1 className="text-xl font-medium"> { header }</h1>
            <ul className="flex flex-col gap-2">
                { links.map((link) => (<li key={ link.id } className="opacity-80"><a href={ link.path } key={ link.id }>{link.name}</a></li>))}
            </ul>
        </div>
    );
};

export default FooterLink;