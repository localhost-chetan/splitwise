import Link from "next/link";
import { LayoutWrapper } from "@common/LayoutWrapper";

export default function Page() {
  return (
    <LayoutWrapper>
      <div
        className={`mb-10 flex flex-wrap content-center items-center gap-x-10`}
      >
        <Link href={`/contacts`}>Contacts</Link>
        <Link href={`/dashboard`}>Dashboard</Link>
        <Link href={`/expenses`}>Expenses</Link>
        <Link href={`/groups`}>Groups</Link>
        <Link href={`/persons`}>Persons</Link>
        <Link href={`/settlements`}>Settlements</Link>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        aliquid, repellendus sunt sapiente enim dolores iusto a consequatur
        voluptas, optio eaque veritatis officiis illo quod animi neque accusamus
        magni repudiandae nihil eum ex! Sint aspernatur rerum aperiam. Et,
        labore soluta dolor, voluptates dignissimos nulla maxime alias assumenda
        quam quod, sint deleniti porro. Accusamus fuga voluptatum, quos, nihil
        possimus temporibus neque deleniti ipsa vel distinctio autem.
        Consectetur distinctio in commodi cum provident similique reprehenderit
        ratione sit sint, neque a quisquam? Sunt nobis mollitia quo error
        dolorem maxime commodi beatae vel eos, nemo suscipit quos molestias
        illum totam ipsum vero aperiam dolor sit exercitationem repellat
        accusamus assumenda veniam est! Dolores ullam fuga impedit vel
        perspiciatis! Consequuntur, cum voluptatem. Temporibus ea est non nobis
        nam, alias odio velit quam eveniet in. Ut eos rerum perferendis nulla.
        Dicta iure atque est quod, maxime iusto voluptatibus officiis molestiae
        optio odit maiores deleniti asperiores! Eaque facere eos iure est
        temporibus, deleniti fugiat fuga, repellendus quaerat quae, reiciendis
        enim ullam consequatur quibusdam dolores ipsam officia explicabo.
        Laudantium, inventore maiores, doloribus, veniam quod porro id iure
        ipsum quasi impedit exercitationem dignissimos officia dolorem
        accusamus. Ducimus necessitatibus, omnis illum alias facilis numquam
        provident eos obcaecati eum, sit quod voluptatibus.
      </p>
    </LayoutWrapper>
  );
}
