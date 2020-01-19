<?xml version="1.0" encoding="utf-8"?>
<serviceModel xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="Game_Inventory_WebApi" generation="1" functional="0" release="0" Id="d57568b3-ffde-4e8c-afd2-7aa7a5a8ac4e" dslVersion="1.2.0.0" xmlns="http://schemas.microsoft.com/dsltools/RDSM">
  <groups>
    <group name="Game_Inventory_WebApiGroup" generation="1" functional="0" release="0">
      <componentports>
        <inPort name="WebRole1:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/LB:WebRole1:Endpoint1" />
          </inToChannel>
        </inPort>
      </componentports>
      <settings>
        <aCS name="WebRole1:APPINSIGHTS_INSTRUMENTATIONKEY" defaultValue="">
          <maps>
            <mapMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/MapWebRole1:APPINSIGHTS_INSTRUMENTATIONKEY" />
          </maps>
        </aCS>
        <aCS name="WebRole1:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/MapWebRole1:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="WebRole1Instances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/MapWebRole1Instances" />
          </maps>
        </aCS>
      </settings>
      <channels>
        <lBChannel name="LB:WebRole1:Endpoint1">
          <toPorts>
            <inPortMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/WebRole1/Endpoint1" />
          </toPorts>
        </lBChannel>
      </channels>
      <maps>
        <map name="MapWebRole1:APPINSIGHTS_INSTRUMENTATIONKEY" kind="Identity">
          <setting>
            <aCSMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/WebRole1/APPINSIGHTS_INSTRUMENTATIONKEY" />
          </setting>
        </map>
        <map name="MapWebRole1:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/WebRole1/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapWebRole1Instances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/WebRole1Instances" />
          </setting>
        </map>
      </maps>
      <components>
        <groupHascomponents>
          <role name="WebRole1" generation="1" functional="0" release="0" software="C:\Users\jeffm\OneDrive\SE340 - Software Architecture\Assignments\MVC_Architecture_Project\Game-Inventory-WebApi\Game-Inventory-WebApi\csx\Release\roles\WebRole1" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaIISHost.exe " memIndex="-1" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="80" />
            </componentports>
            <settings>
              <aCS name="APPINSIGHTS_INSTRUMENTATIONKEY" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;WebRole1&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;WebRole1&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/WebRole1Instances" />
            <sCSPolicyUpdateDomainMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/WebRole1UpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/WebRole1FaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
      </components>
      <sCSPolicy>
        <sCSPolicyUpdateDomain name="WebRole1UpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyFaultDomain name="WebRole1FaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyID name="WebRole1Instances" defaultPolicy="[1,1,1]" />
      </sCSPolicy>
    </group>
  </groups>
  <implements>
    <implementation Id="3b494180-c442-4cc2-afd2-d1d70a34c089" ref="Microsoft.RedDog.Contract\ServiceContract\Game_Inventory_WebApiContract@ServiceDefinition">
      <interfacereferences>
        <interfaceReference Id="c610ba08-ab45-4503-8cf0-2e2ca9e5fa5e" ref="Microsoft.RedDog.Contract\Interface\WebRole1:Endpoint1@ServiceDefinition">
          <inPort>
            <inPortMoniker name="/Game_Inventory_WebApi/Game_Inventory_WebApiGroup/WebRole1:Endpoint1" />
          </inPort>
        </interfaceReference>
      </interfacereferences>
    </implementation>
  </implements>
</serviceModel>