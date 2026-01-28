"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import Image from "next/image";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  badgeUrl: string;
  badgeColor: string;
}

const certifications: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "Oct 2025",
    credentialId: "323348543OCI25FNDCFA",
    verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=9C9A94C39BACFCBA38831BCE1D2B6A73D6003DFCF83F8F3040EEC51107143146",
    badgeUrl: "https://images.credly.com/size/340x340/images/e9823009-1e67-49d7-8dbe-0361a19a1649/50_Oracle_Cloud_Infrastructure.png",
    badgeColor: "#3ECF8E",
  },
  {
    name: "AIOps Foundation v1.0",
    issuer: "DevOps Institute",
    date: "May 2025",
    credentialId: "GR564000235CS",
    verifyUrl: "https://www.peoplecert.org/en/digital-badge-validation",
    badgeUrl: "https://www.peoplecert.org/-/media/folders-reorganized/images/rebranding/product-badges/devops/devops-aiops-foundation-1200x1200.png",
    badgeColor: "#3ECF8E",
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    date: "Dec 2024",
    credentialId: "8AF3D29FA203F215",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/ChungSeongKah-3431/8AF3D29FA203F215?sharingId",
    badgeUrl: "https://images.credly.com/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png",
    badgeColor: "#3ECF8E",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2022",
    credentialId: "SJDDPEB1WNB11N5J",
    verifyUrl: "https://www.credly.com/badges/dcf6f996-3758-49a6-bd97-4ccb20c35502/linked_in_profile",
    badgeUrl: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    badgeColor: "#3ECF8E",
  },
  {
    name: "ITIL 4 Foundation",
    issuer: "AXELOS",
    date: "2021",
    credentialId: "GR671504043SC",
    verifyUrl: "https://www.credly.com/badges/82fcede3-e678-4efd-b4df-a2c2d01e3a59/linked_in_profile",
    badgeUrl: "https://badges.peoplecert.org/Badges/Template/en/1140/EC721FDA-BB43-434E-8EF8-E99F8C748EE4",
    badgeColor: "#3ECF8E",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-8 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-xl">04.</span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
              Certifications <span className="text-primary">_</span>
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/50 to-transparent ml-4" />
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <StaggerItem key={index}>
              <CertificationCard cert={cert} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Summary Stats */}
        <FadeIn delay={0.6}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard label="Cloud Platforms" value="3" />
            <StatCard label="AIOps" value="Certified" />
            <StatCard label="ITIL" value="v4" />
            <StatCard label="Active Certs" value="5+" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CertificationCard({ cert }: { cert: Certification }) {
  // Special handling for ITIL badge to make it appear same size as others
  const isITIL = cert.name.includes("ITIL");
  const badgeSize = isITIL ? "w-44 h-44" : "w-36 h-36";
  
  return (
    <div className="bg-background-secondary border border-muted-dark/20 rounded-lg p-6 h-full flex flex-col items-center text-center hover:border-muted-dark/40 transition-colors">
      {/* Actual Credly Badge Image */}
      <div className="mb-6 w-44 h-44 relative flex items-center justify-center">
        <div className={`relative ${badgeSize}`}>
          <Image
            src={cert.badgeUrl}
            alt={`${cert.name} badge`}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Cert Name */}
      <h3 className="font-sans text-sm font-semibold text-foreground mb-2 leading-snug px-2 min-h-[2.5rem]">
        {cert.name}
      </h3>

      {/* Issuer */}
      <p 
        className="font-sans text-xs font-medium mb-1"
        style={{ color: cert.badgeColor }}
      >
        {cert.issuer}
      </p>

      {/* Date */}
      <p className="font-mono text-[11px] text-muted-dark mb-4">
        Issued {cert.date}
      </p>

      {/* Credential ID */}
      {cert.credentialId && (
        <div className="w-full mt-auto pt-4 border-t border-muted-dark/20">
          <p className="font-mono text-[9px] text-muted-dark mb-1 uppercase tracking-wider">
            Credential ID
          </p>
          <p className="font-mono text-[10px] text-muted break-all leading-relaxed">
            {cert.credentialId}
          </p>
        </div>
      )}

      {/* Verify Button - Credly style */}
      {cert.verifyUrl ? (
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full py-2.5 px-4 rounded font-sans text-xs font-semibold transition-all duration-200 border-2"
          style={{ 
            borderColor: cert.badgeColor,
            color: cert.badgeColor,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = cert.badgeColor;
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = cert.badgeColor;
          }}
        >
          View Credential
        </a>
      ) : (
        <div className="mt-4 w-full py-2.5 px-4 rounded font-sans text-xs font-semibold border-2 border-muted-dark/30 text-muted-dark">
          Verified
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="terminal-border bg-background-secondary p-4 text-center">
      <p className="font-mono text-2xl md:text-3xl text-primary mb-1">{value}</p>
      <p className="font-mono text-xs text-muted-dark">{label}</p>
    </div>
  );
}
