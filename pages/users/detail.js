import Layout from "@/layouts";

export default function Profile() {
  return (
    <>
      <Layout
        metaTitle={"Detasil User"}
        metaDescription={"Informasi Detail dari user"}
      >
        {/* Content Styling dengan Global CSS */}
        <div className="content">
          <p>Ini Halaman Detail User</p>
        </div>
      </Layout>
    </>
  );
}
