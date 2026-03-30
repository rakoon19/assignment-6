

const FooterLink = ({ item }) => {
    const header = item.header;
    const links = item.links;
    return (
        <div className='flex flex-col gap-3'>
            <h1> { header }</h1>
            <ul className="flex flex-col gap-2">
                { links.map((link) => (<li><a href={ link.path }>{link.name}</a></li>))}
            </ul>
        </div>
    );
};

export default FooterLink;